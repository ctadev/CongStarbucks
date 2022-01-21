import React from 'react'
import CashOrCard from '../components/rewardsComponent/CashOrCard'
import Extras from '../components/rewardsComponent/Extras'
import GettingStarted from '../components/rewardsComponent/GettingStarted'
import Rating from '../components/rewardsComponent/Rating'
import RewardHero from '../components/rewardsComponent/RewardHero'
import RewardNav from '../components/rewardsComponent/RewardNav'
import Title from '../components/rewardsComponent/Title'

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
        </main>
    )
}

export default Rewards
