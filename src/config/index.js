module.exports = {

    author: "Giuliano Gabella",
    siteTitle: "Giuliano Gabella's Portfolio Website",
    siteShortTitle: "Giuliano Gabella", // Used as logo text in header, footer, and splash screen
    siteDescription: "A portfolio showcasing my projects and experience in web development.",
    siteUrl: "https://github.com/ggabella91",
    siteLanguage: "en_US",
    siteIcon: "src/content/favicon.png", // Relative to gatsby-config file

    splashScreen: false, // Set this to true if you want to use the splash screen


    // There are icons available for the following platforms: 
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/giuliano-gabella-821b0a5a/"
        },
        {
            name: "GitHub",
            url: "https://github.com/ggabella91"
        }
    ],

    navLinks: {
        menu: [
            {
                name: "About Me",
                url: "/#about",
            },
            {
                name: "Projects",
                url: "/#projects",
            },
        ],
        button: {
            name: "Contact",
            url: "/#contact",
        }
    },

    footerLinks: [

    ]
}