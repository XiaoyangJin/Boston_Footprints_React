import React from 'react';

import Card from './Card';

const Food = () => {
    const bbqImage = new URL('../images/BBQ.png', import.meta.url).href;
    const oysterImage = new URL('../images/Oyster.png', import.meta.url).href;
    const lobsterImage = new URL('../images/Lobster.png', import.meta.url).href;
    const cakeImage = new URL('../images/Cake.png', import.meta.url).href;
    const red8Image = new URL('../images/Red8.png', import.meta.url).href;
    const sumiaoImage = new URL('../images/SuMiao.png', import.meta.url).href;
    const happyLambImage = new URL('../images/HappyLamb.png', import.meta.url).href;

    return (
        <div className="CardBoard">
            <main id="main" className="main">
                <h2 className="main__title">Great Food in or near Boston</h2>
                <div className="cards">
                    <Card img_source={bbqImage} title='Gateway BBQ' desc="Gateway BBQ is fantastic; it allows you to start your own fire, prepare food, and cook it right there. The aroma is irresistible, and you don't even need seasoning—the pork tastes great on its own without any off-putting smells." link="https://getaway.house/" alt_content="a grill pan set over a wood fire is cooking some meat and vegetables" />
                    <Card img_source={oysterImage} title="Captain Parker's Pub" desc='Fresh oysters in Boston are exceptional, especially near the sea. They taste sweet and fresh—just a squeeze of lemon is all you need. The clam soup is also delicious, but I still prefer oysters.' link="https://www.captainparkers.com/" alt_content="On the table was a plate of fresh oysters on crushed ice with a lemon wedge and chili sauce on the side. Next to it is a bowl of white clam chowder" />
                    <Card img_source={lobsterImage} title='Roy Moore Lobster Company' desc="You must have heard about the famous Boston lobster—it's truly the best! It's affordable and incredibly fresh, caught right from the sea. You can even enjoy your meal while sitting facing the ocean, enhancing the experience." link="https://www.roymoorelobster.com/" alt_content="There were three fresh Boston lobsters on the table, alongside a plate of fresh oysters on crushed ice with two cloves of lemon and chili sauce on the side." />
                    <Card img_source={cakeImage} title='TOUS les JOURS' desc='This is my favorite dessert spot; all the desserts here are perfectly sweetened, especially the cake. The cream just melts in your mouth. Additionally, it offers a wonderful ambiance for a date.' link="https://www.tljus.com/" alt_content="A piece of green cream cake with a grape and a small piece of chocolate on top and strawberry cream in the middle" />
                    <Card img_source={red8Image} title='Red 8 Asian Restaurant' desc="This is where you can enjoy the best Peking roast duck, just like you would in Beijing. It's located inside a casino, so make sure to bring your ID." link="https://www.encorebostonharbor.com/dining-and-nightlife/dining/red-8" alt_content="There is half a sliced Peking duck on the table, two plates of dipping sauce and a cage of thin pancakes" />
                    <Card img_source={sumiaoImage} title='Sumiao Hunan Kitchen' desc='Do you like spicy food? This is your best choice! The perfect environment features live singers, making it hard to decide what to order since everything is delicious!' link="https://www.sumiaohunan.com/" alt_content="There are four steamed buns, a plate of shrimp balls, a plate of pork belly, a plate of fried tofu and three small bowls of rice on the table" />
                    <Card img_source={happyLambImage} title='Happy Lamb Hotpot' desc="Are you ready for a buffet? For just 30 bucks, you can eat anything you want! With free drinks and desserts included, you won't regret it—though finding a parking spot can be challenging." link="https://happylambhotpot.com/" alt_content="There are four plates of frozen meat slices on the left, and the half-spicy and half-non-spicy mandarin duck pot base on the right" />
                </div>
            </main>
        </div>
    )
}

export default Food