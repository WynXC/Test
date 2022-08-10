const collectionInfo = {
    name: "The Flipside Metaverse",
    title: "{name}",
    date: "11.08.2022",
    socialMedia: {
        discord: "https://discord.com/",
        twitter: "https://twitter.com/",
    },
    medias: {
        preview: "1.gif",
        favicon: "logo.jpg",
    },
    background: {
        type: "video",
        image: "",
        video: "1.mp4",
        color: "#4E4E6D",
    }
}
const mintInfo = {
    price: 0.99,
    totalSupply: 1000,
    toFixed: 2,
    minUnits: 1,
    maxUnits: 2,
    askMintLoop: true,
}

const nftsInfo = {
    active: true,
    minValue: 0.2,
    maxTransfer: 5,
}

if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);