
const reloadPage = (router) => {
    setTimeout(() => {
        router.refresh()
    }, 2000)
}

export {
    reloadPage
}