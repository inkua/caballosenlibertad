import EventImgModal from "../EventImgModal/EventImgModal"


const EventBtnImage = ({ imgUrl, open, setOpen, eventId }) => {
	return (
		<>
			<button
				onClick={() => setOpen(true)}
				className={`block px-4 py-2 text-sm text-gray-700 hover:underline `}
				role="menuitem"
				tabIndex="-1"
				id="menu-item-0"
			>
				Imagen
			</button>

			<EventImgModal data={{ open, setOpen, imgUrl, eventId }} />
		</>
	)
}

export default EventBtnImage
