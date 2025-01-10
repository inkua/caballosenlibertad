import { sendEmail } from "@/app/api/send-email";
import { passwordTemplate } from "@/utils/HTML_templates";

import { addElement, deleteElement, getAllElements, getElementById, updateElement } from "./container";

// add a new admin | require the data admin
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

// set a new random password & send it by email | require the data admin
const resetPasswordAdmin = async (admin) => {
    const password = generatePassword()

    const response = await updateElement(password, admin.id, 'admins')

    if (response) {
        const { subject, message } = passwordTemplate(admin.name, password)
        await sendEmail(admin.email, subject, message)
        return true
    }

    return false
};

// get a admin by id | require the admin id
const getAdmById = async (aid) => {
    return await getElementById(aid, "admins");
};

// get all admins without passwords
const getAdmins = async () => {
    const admins = await getAllElements("admins");
    const adminsWithoutPasswords = removePasswords(admins)
    return adminsWithoutPasswords
};

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
// update a admin by id | require new data and the admin id
const setAdmin = async (newData, aid) => {
    return await updateElement(newData, aid, "admins");
};

// Get an admin by email | require the admin email
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

// update a admin by id | require new data and the admin id
const deleteAdmin = async (aid) => {
    return await deleteElement(aid, 'admins');
}

// update a admin by email| require new password, current password and the admin email
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

// generate a random password
const generatePassword = () => Array.from(
    { length: 10 },
    () => 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?'[
        Math.floor(Math.random() * 77)
    ]
).join('');

// delete each users' passwords from the user list
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
