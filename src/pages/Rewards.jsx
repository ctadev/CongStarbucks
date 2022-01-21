import React from 'react'
import CashOrCard from '../components/rewardsComponent/CashOrCard'
import Extras from '../components/rewardsComponent/Extras'
import GettingStarted from '../components/rewardsComponent/GettingStarted'
import Rating from '../components/rewardsComponent/Rating'
import Restriction from '../components/rewardsComponent/Restriction'
import RewardHero from '../components/rewardsComponent/RewardHero'
import RewardNav from '../components/rewardsComponent/RewardNav'
import StarCode from '../components/rewardsComponent/StarCode'
import Title from '../components/rewardsComponent/Title'
import Footer from '../components/globalComponents/Footer';
import Socials from '../components/globalComponents/Socials'

function Rewards() {
    return (
        <main className='rewards-container'>
            <RewardNav />
            <Title />
            <RewardHero />
            <GettingStarted />
            <Rating />
            <Extras />
            <CashOrCard />
            <StarCode />
            <Restriction />
            <Footer />
            <Socials />
        </main>
    )
}

export default Rewards
