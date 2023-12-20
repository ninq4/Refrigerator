import React from 'react'
import HeroSection from './hero-section/Hero-section'
import TransferSection from './transfer-section/transfer-section'
import ServersSection from './servers-section/servers-section'
import GuaranteeSection from './guarantee-section/guarantee-section'
import {HelpsSection} from '@/app/components/Helps/helps-section'
const WebsiteBuilder = () => {
  return (
    <>
    <HeroSection/>
    <ServersSection/>
    <TransferSection/>
    <GuaranteeSection/>
    <HelpsSection/>
    </>
  )
}

export default WebsiteBuilder
