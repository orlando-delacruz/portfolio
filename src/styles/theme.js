const theme = {
    colors: {
        primary: "#2562EA",
        primaryLight: "#0277BD",
        primaryDark: "#050E22",
        secondary: "#1E293B",

        background: "#0B1222",
        sectionBackground: "#050E22",

        white: "#FFFFFF",
        black: "#222222",
    },

    typography: {
        font: {
            main: "Inter",
            secondary: "sans-serif",
        },


        heading: {
            h1: "55px",
            h2: "40px",
            h3: "35px",
            h4: "30px",
            h5: "25px",
            h6: "20px"
        },

        size: {
            xs: "12px",
            sm: "14px",
            body: "16px",
            md: "18px",
            lg: "20px"
        },

        weight: {
            thin: "200",
            light: "300",
            regular: "400",
            medium: "500",
            semibold: "600",
            bold: "700"
        }
    },

    media: {
        mobile: "(max-width: 576px)",
        tablet: "(max-width: 1024px)",
        laptop: "(max-width: 1280px)",
        desktop: "(min-width: 1440px)"
    }
}

export default theme