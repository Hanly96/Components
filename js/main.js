(() => {
    // component will go here
    const HomePageComponent = {
        
        template: "<h2>You're one the home page</h2>",
    
    };

    const UsersPageComponent = {
        template: "<h2>You're one the users page</h2>",
    };

    const ContactPageComponent = {
        template: "<h2>You're one the contact page</h2>",
    };

    const ErrorPageComponent = {
        template: "<h2>Page not found! Please try again</h2>",
    };

    const routes = [
        { path: '/', name: 'home', component: HomePageComponent },
        { path: '/users', name: 'users', component: UsersPageComponent },
        { path: '/contact', name: 'contact', component: ContactPageComponent },
        { path: '/*', name: 'error', component: ErrorComponent },

    ];

    const router = new VueRouter({
        routes
    });

    const vm = new Vue ({
        el: '#app',
        
        data: {
            message: "sup from vue!"
        },

        created: function() {
            console.log('parent is live');
        },

        methods: {
            logParent(message) {
                console.log("from the parent", message);
            },

            logMainMessage(message) {
                console.log("called from inside a child, lives in the parent", message);
            }
        },

    components: {
        'HomePageComponent': HomePageComponen,
        'UsersPageComponent': UsersPageComponent
    },

    const UsersPageComponent = {
        props: ['id'],
        template: "#userList",

        // this always needs to be a function in a component
    }
    router:router
})
})();