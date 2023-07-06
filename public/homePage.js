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

const rates = new RatesBoard();
const getStocks = () => {
    ApiConnector.getStocks((res) => {
        if(res.success) {
            rates.clearTable()
            rates.fillTable(res.data);
        }
    })
}
getStocks();
setInterval(getStocks, 60000);

const moneyManager = new MoneyManager();

// const profileWidget = new ProfileWidget();

moneyManager.addMoneyCallback = (data) => {
    ApiConnector.addMoney(data, (res) => {
        if(res.success) {
            ProfileWidget.showProfile(res.data);
        }
        moneyManager.setMessage(res.success, res.error)
    })
}
moneyManager.conversionMoneyCallback = (data) => {
    ApiConnector.convertMoney(data, (res) => {
        console.log(res)
        if(res.success) {
            ProfileWidget.showProfile(res.data);
        }
        moneyManager.setMessage(res.success, res.error)
    })
}
moneyManager.sendMoneyCallback = (data) => {
    ApiConnector.transferMoney(data, (res) => {
        console.log(res)
        if(res.success) {
            ProfileWidget.showProfile(res.data);
        }
        moneyManager.setMessage(res.success, res.error)
    })
}
favoritesWidget = new FavoritesWidget();
ApiConnector.getFavorites((res) => {
    console.log(res)
        if(res.success){
            favoritesWidget.clearTable()
            favoritesWidget.fillTable(res.data)
            moneyManager.updateUsersList(res.data)
        }
})
favoritesWidget.addUserCallback = (data) => {
    ApiConnector.addUserToFavorites(data, (res) => {
        console.log(res)
        if(res.success){
            favoritesWidget.clearTable()
            favoritesWidget.fillTable(res.data)
            moneyManager.updateUsersList(res.data)
        }
        favoritesWidget.setMessage(res.success, res.error)
    })
}
favoritesWidget.removeUserCallback = (data) => {
    ApiConnector.removeUserFromFavorites(data, (res) => {
        console.log(res)
        if(res.success){
            favoritesWidget.clearTable()
            favoritesWidget.fillTable(res.data)
            moneyManager.updateUsersList(res.data)
        }
        favoritesWidget.setMessage(res.success, res.error)
    })
}
//favoritesWidget.removeUserCallback = 
// const favoritesWidget = new FavoritesWidget();
// favoritesWidget.setMessage(res.success, res.error)