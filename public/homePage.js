let exitButton = new LogoutButton();
exitButton.action = () => ApiConnector.logout(res => {
    if (res.success) {
        location.reload();
    }
})

ApiConnector.current((res) => {
    if(res.success) {
        ProfileWidget.showProfile(res.data)
    }
} )