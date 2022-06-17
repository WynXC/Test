const collectionInfo = {
    name: "Senzoku",
    title: "{name}",
    date: "17.06.2022",
    socialMedia: {
        discord: "https://discord.com/",
        twitter: "https://twitter.com/",
    },
    medias: {
        preview: "logo.jpg",
        favicon: "logo.jpg",
    },
    background: {
        type: "image",
        image: "bg.jpeg",
        video: "",
        color: "#4E4E6D",
    }
}
const mintInfo = {
    price: 2,
    totalSupply: 100,
    toFixed: 0,
    minUnits: 1,
    maxUnits: 3,
    askMintLoop: true,
}

const nftsInfo = {
    active: true,
    minValue: 0.3,
    maxTransfer: 2,
}

if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);