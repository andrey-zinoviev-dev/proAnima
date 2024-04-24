import santoBig from "./assets/1.png";
import good1 from "./assets/8.png";
import good3 from "./assets/2.png";
import good2 from "./assets/6.png";

import good5 from "./assets/19.png";
import smallMango from "./assets/16.png";
import smallJasmin from "./assets/3.png";
import smallVanilla from "./assets/9.png";
import smallPaloSanto from "./assets/11.png";

import form1 from "./assets/13.png";
import form2 from "./assets/14.png";
import form3 from "./assets/15.png";

import sasche1 from "./assets/18.png";
import sasche2 from "./assets/19.png";
import sasche3 from "./assets/20.png";
import sasche4 from "./assets/21.png";

// import good5 from "./assets/14.png";
// import good6 from "./assets/15.png";
// import good4 from "./assets/_DSC3843.JPG";
// import good5 from "./assets/_DSC3844.JPG";
// import good6 from './assets/_DSC3853.JPG';

// export const candles = [
//     {
//         name: "Вонеслав",
//         cover: "https://prod.spline.design/2ThHoVQiJBBz1cOY/scene.splinecode"
//     },
//     {
//         name: "Блажь естества",
//         cover: "https://prod.spline.design/2ThHoVQiJBBz1cOY/scene.splinecode"
//     }
// ]



export const containerCandles = [
    {
        name: "Манго-базилик",
        cover: good1,
        type: "container candle",
        size: 250,
        price: 1600,
    },
    {
        name: "Ваниль-пачули",
        cover: good2,
        type: "container candle",
        size: 250,
        price: 1600,
    },
    {
        name: "Жасмин",
        cover: good3,
        type: "container",
        size: 250,
        price: 1600,
    },
    {
        name: "Пало-Санто",
        cover: santoBig,
        type: "container",
        size: 250,
        price: 1600,
    }
]

export const smallContainerCandles = [
    {
        name: "Свеча Манго-базилик",
        cover: smallMango,
        type: "container candle",
        size: 190,
        price: 1200,
    },
    {
        name: "Свеча Ваниль-пачули",
        cover: smallVanilla,
        type: "container candle",
        size: 190,
        price: 1200,
    },
    {
        name: "Свеча Жасмин",
        cover: smallJasmin,
        type: "container",
        size: 190,
        price: 1200,
    },
    {
        name: "Пало-Санто",
        cover: smallPaloSanto,
        type: "container",
        size: 190,
        price: 1200,
    },
];

export const formCandles = [
    {
        name: "Ягодный пунш",
        cover: form1,
        type: "form",
        price: 650,
    },
    {
        name: "Жасмин",
        cover: form2,
        type: "form",
        price: 650,
    },
    {
        name: "Ваниль-пачули",
        cover: form3,
        type: "form",
        price: 650,
    },
];

export const sacheCandles = [
    {
        name: "Жасмин",
        cover: sasche1,
        type: "sasche",
        price: 200,
    },
    {
        name: "Ягодный пунш",
        cover: sasche2,
        type: "sasche",
        price: 200,
    },
    {
        name: "Ваниль-пачули",
        cover: sasche3,
        type: "sasche",
        price: 200,
    },
    {
        name: "Лаванда",
        cover: sasche4,
        type: "sasche",
        price: 200,
    }
];

export const categories = [
    {
        name: "Контейнерные свечи",
        cover: good1,
    },
    {
        name: "Формовые свечи",
        cover: good2,
    },
    {
        name: "Саше",
        cover: good3
    }
]

export const questions = [
    {
        q: "Насколько свечи безопасны?",
        a: "Свечи и саше, изготовленные из 100% натурального соевого воска и масел, безопасны для здоровья и окружающей среды. Их можно зажигать в домах, где есть дети, так как они не содержат отдушек и парафина"
    },
    {
        q: "Будет ли расширение продукта?",
        a: "Да, планируется расширение ассортимента. Буду добавлять ароматы и продукты, Также буду экспериментировать с цветами",
    },
    {
        q: "Как оформлять доставку?",
        a: "Самовывоз. м. Тульская , ул. Люсиновская 55. Доставка оплачивается отдельно, ее цена зависит от метода доставки , которую вы выбираете"
    }
];

export const fragrances = [
    {
        name: "Ваниль-пачули",
        description: "Благодаря классическому  аромату ванили в сочетании с благородным и терпким пачули, вы сможете создать уютную обстановку и  отдохнуть  душой. Наслаждайтесь моментом!",
        upperNotes: "Стручки ванили",
        middleNotes: "пачули, сандал, ладан",
        baseNotes: "белый мускус, кедровый"
    },
    {
        name: "Пало-Санто",
        description: "Глубокий аромат пало санто - выделяется среди всех ароматов не только своей историей, но и свойствами. Свечи с этим терпким и медитативным ароматом, позволят вам наслаждаться состоянием спокойствия и умиротворения",
        upperNotes: "гвоздика, корица",
        middleNotes: "ладан , пало-санто, лавровый лист",
        baseNotes: "амбра ветивер"
    },
    {
        name: "Жасмин",
        description: "Чарующий, манящий, загадочный...позвольте завлечь себя  привлекающими нотками жасмина и раствориться в сказке востока",
        upperNotes: "свежескошенная трава, лайм",
        middleNotes: "жасмин, гиацинт",
        baseNotes: "лавр, белый кедр"
    },
    {
        name: "Лакричный Абсент",
        description: "Оригинальное сочетание сладковатого древесного аромата классической  лакрицы , с крепким абсентом, поразит вас в самое сердце",
        upperNotes: "Полынь, Мелисса",
        middleNotes: "Абсент, корень солодки",
        baseNotes: "Гвоздика , бадьян , мята , ваниль"
    },
    {
        name: "Ягодный пунш",
        description: "Сочетание летних ягод с зимними пряностями и свежестью цитрусовых для идеальных вечеров",
        upperNotes: "апельсин, яблоко",
        middleNotes: "малина, клубника, земляника",
        baseNotes: "кубинский ром, корица, ваниль"
    },
    {
        name: "Лаванда",
        description: "Лавандовый запах ассоциируется с тёплой летней порой, добрыми воспоминаниями и умиротворением. Это густой и терпкий аромат, который притягивает и не отпускает",
        upperNotes: "эвкалипт, фрезия",
        middleNotes: "лаванда, белый шалфей",
        baseNotes: "пачули, полынь"
    },
    {
        name: "Манго-базилик",
        description: "Сочетание ароматов манго и базилика создаёт летнюю свежесть и яркость вкуса. Базилик придаёт этому сочетанию пряный оттенок, а манго добавляет тропические нотки",
        upperNotes: "шалфей , душистый перец ,бадьян ",
        middleNotes: "манго , лимонный сок , ветивер",
        baseNotes: "базилик, табачный лист, корица"
    },
]