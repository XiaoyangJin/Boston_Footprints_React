import React from 'react';
import Card from './Card';

import "../css/Play.css";
import { useState } from 'react';

const Play = () => {
    const [filter, setFilter] = useState('Show all');

    const mfaImage = new URL('../images/MFA.jpg', import.meta.url).href;
    const deerIslandImage = new URL('../images/DeerIsland.jpg', import.meta.url).href;
    const whiteMountainImage = new URL('../images/WhiteMount.jpg', import.meta.url).href;
    const revereBeachImage = new URL('../images/RevereBeach.jpg', import.meta.url).href;
    const waldenPondImage = new URL('../images/WaldenPond.jpg', import.meta.url).href;
    const capeCodImage = new URL('../images/Capcode.jpg', import.meta.url).href;
    const rhodeIslandImage = new URL('../images/RhodeIsland.jpg', import.meta.url).href;
    const salemImage = new URL('../images/Salem.jpg', import.meta.url).href;
    const getawayImage = new URL('../images/Gateway.jpg', import.meta.url).href;
    const manchesterImage = new URL('../images/Manchester.JPG', import.meta.url).href;
    const niagaraFallImage = new URL('../images/NiagraFall.JPG', import.meta.url).href;
    const acadiaImage = new URL('../images/Acadia.JPG', import.meta.url).href;


    const cardsData = [
        { img_source: mfaImage, title: 'MFA', desc: 'The Museum of Fine Arts in Boston is one of the largest museums in the United States, renowned for its comprehensive collection that spans thousands of years, featuring everything from ancient Egyptian artifacts to contemporary art.', link: "https://www.mfa.org/", alt_content: "a glass contains of a black flower" },
        { img_source: deerIslandImage, title: 'Deer Island', desc: 'Deer Island, part of the Boston Harbor Islands, is notable for its significant wastewater treatment facility, public recreation areas, and panoramic views of the Boston skyline, blending environmental management with public enjoyment.', link: "https://www.bostonharborislands.org/deer-island/", alt_content: "sunset over the sea" },
        { img_source: whiteMountainImage, title: 'White Mountain', desc: 'The White Mountains, located in New Hampshire, are a popular outdoor recreation destination, famous for their rugged peaks, scenic vistas, and extensive network of hiking trails, including parts of the Appalachian Trail.', link: "https://www.visitwhitemountains.com/", alt_content: "overview of the mountain with lots of red leaves" },
        { img_source: revereBeachImage, title: 'Revere Beach', desc: 'Revere Beach, located just north of Boston, Massachusetts, is the oldest public beach in the United States, known for its wide sandy expanse, scenic views, and cultural events like the annual International Sand Sculpting Festival.', link: "https://reverebeach.com/", alt_content: "a representative stand clock" },
        { img_source: waldenPondImage, title: 'Walden Pond', desc: 'Walden Pond, situated in Concord, Massachusetts, is a historic site famous for its association with the writer Henry David Thoreau, who lived there from 1845 to 1847, and its serene natural setting that continues to attract visitors seeking reflection and outdoor activities.', link: "https://www.nps.gov/places/walden-pond-in-the-walden-pond-state-reservation.htm", alt_content: "" },
        { img_source: capeCodImage, title: 'Cape Cod', desc: 'Cape Cod, often referred to colloquially as "Capcode," is a hook-shaped peninsula in Massachusetts, USA, known for its quaint villages, seafood shacks, lighthouses, pristine beaches, and maritime character, making it a beloved summer destination.', link: "https://www.capecodchamber.org/", alt_content: "a very big overview of the sea and sky with some pinkish clouds" },
        { img_source: rhodeIslandImage, title: 'Rhode Island', desc: 'Rhode Island, the smallest state in the United States, is known for its sandy shores, colonial towns, and as a maritime hub, with a rich history, vibrant cultural scene, and the prestigious Ivy League institution, Brown University, located in its capital, Providence.', link: "https://www.visitrhodeisland.com/", alt_content: "left half is big stones and some cabins, right side is the sea" },
        { img_source: salemImage, title: 'Salem', desc: 'Salem, located in Massachusetts, is historically renowned for its 1692 witch trials and today attracts visitors with its museums dedicated to witchcraft, colonial architecture, and a vibrant waterfront area, blending historical intrigue with modern tourism.', link: "https://www.salem.org/", alt_content: "some people dressed like Frozen characters" },
        { img_source: getawayImage, title: 'Gateway', desc: 'Getaway offers secluded tiny cabins nestled in nature, providing a tranquil escape from daily life with minimalist designs that encourage guests to unwind and reconnect with the outdoors.', link: "https://getaway.house/", alt_content: "inside look of a cabin with a big window facing the forest and a big white bed with quilt on it" },
        { img_source: manchesterImage, title: 'Manchester By The Sea', desc: 'Manchester-by-the-Sea is a picturesque coastal town in Massachusetts, known for its charming New England scenery, historic homes, beautiful beaches, and the backdrop for the acclaimed film of the same name.', link: "https://www.manchester.ma.us/", alt_content: "an overlook of the sea in a sunny day" },
        { img_source: niagaraFallImage, title: 'Niagara Fall', desc: 'Niagara Falls is a majestic natural wonder straddling the border between the United States and Canada, known for its powerful waterfalls and scenic beauty, attracting millions of visitors each year.', link: "https://www.niagaraparks.com/visit-niagara-parks/plan-your-visit/deals-packages/?gad_source=1&gclid=Cj0KCQiA84CvBhCaARIsAMkAvkJ0IY_P3u0fej87fVyRyQqpgsu6eHzEpNtbGK-JNlBiwyjD9gxXYWUaAt4GEALw_wcB", alt_content: "a picture of the biggest fall with some frog on it" },
        { img_source: acadiaImage, title: 'Acadia', desc: 'Acadia National Park, located on the coast of Maine, is a stunning natural reserve known for its rugged Atlantic shoreline, forested landscapes, and the tallest mountain on the U.S. Atlantic coast, Cadillac Mountain.', link: "https://www.nps.gov/acad/index.htm", alt_content: "a red wood house covered with some snow" }
    ];

    const filteredCards = cardsData.filter(card => {
        if (filter === 'In Boston') {
            return card.desc.includes('Boston');
        } else if (filter === 'Around Boston') {
            return !card.desc.includes('Boston');
        }
        return true; // 'All' filter returns everything
    })

    return (
        <div className="CardBoard">
            <main id="main" className="main">
                <h2 className="main__title">Great Places in or near Boston</h2>
                <div className='filters'>
                    <p className='filter__title'>Filter: </p>
                    <button className='filter__button' onClick={() => setFilter('All')}>All</button>
                    <button className='filter__button' onClick={() => setFilter('In Boston')}>In Boston</button>
                    <button className='filter__button' onClick={() => setFilter('Around Boston')}>Around Boston</button>
                </div>
                <div className="cards">
                    {filteredCards.map((card, index) => (
                        <Card
                            key={index}
                            img_source={card.img_source}
                            title={card.title}
                            desc={card.desc}
                            link={card.link}
                            alt_content={card.alt_content}
                        />
                    ))}
                </div>
            </main>
        </div>
    )
}

export default Play