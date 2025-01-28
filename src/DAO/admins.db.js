import { sendEmail } from "@/app/api/send-email";
import { passwordTemplate } from "@/utils/HTML_templates";

import { addElement, deleteElement, getAllElements, getElementById, updateElement } from "./container";

// add a new admin | requires admin data | sends email with generated password and returns true if successful, otherwise false
const addAdmin = async (newAdmin) => {
    newAdmin.type = "admin"
    newAdmin.password = generatePassword()

    const response = await addElement(newAdmin, 'admins')

    if (response) {
        const { subject, message } = passwordTemplate(newAdmin.name, newAdmin.password)
        await sendEmail(newAdmin.email, subject, message)
        return true
    }

    return false
};

// reset an admin's password | requires admin data | sends email with new password and returns true if successful, otherwise false
const resetPasswordAdmin = async (admin) => {
    const password = generatePassword()

    const response = await updateElement({password:password}, admin.id, 'admins')

    if (response) {
        const { subject, message } = passwordTemplate(admin.name, password)
        await sendEmail(admin.email, subject, message)
        return true
    }

    return false
};

// get an admin by ID | requires the admin ID | returns the admin object or false if not found
const getAdmById = async (aid) => {
    return await getElementById(aid, "admins");
};

// get all admins without passwords | does not require parameters | returns a list of admins without passwords
const getAdmins = async () => {
    const admins = await getAllElements("admins");
    const adminsWithoutPasswords = removePasswords(admins)
    return adminsWithoutPasswords
};

// get admins per page | requires page number and page size (default: 1 and 5) | returns paginated admins
const getAdminsPerPage = async (page = 1, pageSize = 5) => {
    const allAdmins = await getAdmins()

    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    const paginatedAdmins = allAdmins.slice(startIndex, endIndex);

    const totalItems = allAdmins.length;
    const totalPages = Math.ceil(totalItems / pageSize);

    return {
        list: paginatedAdmins,
        currentPage: page,
        totalPages: totalPages,
        totalItems: totalItems,
        pageSize: pageSize
    };
}

// update an admin by ID | requires new data and admin ID | returns true if successful, otherwise false
const setAdmin = async (newData, aid) => {
    return await updateElement(newData, aid, "admins");
};

// get an admin by email | requires the admin email | returns the admin object or false if not found
const getAdminByEmail = async (email) => {
    try {
        const admins = await getAllElements("admins");
        const result = admins.find((item) => item.email === email);
        if (result) {
            return result;
        } else {
            return false;
        }
    } catch (e) {
        console.error("Error getting admin email: ", e);
        return false;
    }
};

// delete an admin by ID | requires the admin ID | returns true if successful, otherwise false
const deleteAdmin = async (aid) => {
    return await deleteElement(aid, 'admins');
}

// update an admin's password | requires new password, current password, and admin email | returns true if successful, otherwise false
const updatePasswordAdmin = async (newPassword, currentPassword, email) => {
    const user = await getAdminByEmail(email);
    if (!user) {
        return false;
    } else if (user.password !== currentPassword) {
        return false;
    };

    const newData = { password: newPassword };
    return await updateElement(newData, user.id, 'admins');
}

// generate a random password | does not require parameters | returns a randomly generated password string
const generatePassword = () => Array.from(
    { length: 10 },
    () => 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?'[
        Math.floor(Math.random() * 77)
    ]
).join('');

// remove passwords from a user list | requires the list of users | returns a list of users without passwords
const removePasswords = (users) => {
    return users.map(user => {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    });
}

export {
    addAdmin,
    getAdmById,
    getAdmins,
    setAdmin,
    getAdminByEmail,
    deleteAdmin,
    updatePasswordAdmin,
    getAdminsPerPage,
    resetPasswordAdmin,
};
