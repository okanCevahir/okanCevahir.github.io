export class HomePage {
    tabBarElement: any;
    splash = true;

    constructor(public navCtrl: NavController) {
        this.tabBarElement = document.querySelector('.tabbar');
    }

    ionViewDidLoad() {
        this.tabBarElement.style.display = 'none';
        setTimeout(() => {
            this.splash = false;
            this.tabBarElement.style.display = 'flex';
        }, 4000);
    }


}