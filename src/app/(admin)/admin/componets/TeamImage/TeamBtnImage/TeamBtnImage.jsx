import TeamImgModal from "../TeamImgModal/TeamImgModal"

const TeamBtnImage = ({ imgUrl, open, setOpen, teamId, reload }) => {
    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="inline-flex h-10 md:h-12 items-center justify-center text-white rounded-md bg-primary px-8 text-sm xl:text-base font-medium hover:bg-secondary hover:text-primary"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
            >
                Cambiar imagen
            </button>

            <TeamImgModal data={{ open, setOpen, imgUrl, teamId, reload }} />
        </>
    )
}

export default TeamBtnImage
