import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/Nav/NavBar'
import useCampaignStore from './customHooks/Stores/campaignStateStore'
import Login from './components/Auth/Login'
import useIsAuthPage from './customHooks/Stores/useIsAuthPage'
import SignUp from './components/Auth/SignUp'
import NoMatchPage from './components/NoMatchPage'
import Campaign from './components/Partner/Campaign/Campaign'
import PartnerInventory from './components/Partner/PartnerInventory/PartnerInventory'
import PartnerHome from './components/Partner/PartnerHome/PartnerHome'
import Impact from './components/Partner/Impact/Impact'
import Discussion from './components/Partner/Discussion/Discussion'
import Profile from './components/Partner/Profile/Profile'

function App() {
  const campaignState = useCampaignStore(state => state.currentCampaignState)
  const isAuthPage = useIsAuthPage(state => state.isAuthPage)
  const authLevel = useIsAuthPage(state => state.authLevel)

  useEffect(() => {
      const currentLocation = window.location.pathname
      console.log(currentLocation);
      if(isAuthPage && (currentLocation == '/sign-up' || currentLocation == '/login' || currentLocation == '/signup')) {
        document.body.style.overflow = 'auto'
      }else{
        document.body.style.overflow = 'hidden'
      }
  }, [isAuthPage])
  


  return (
    <div className="App relative flex gap-10 2xl:gap-14 bg-brandGray28x min-h-screen text-brandBlack1x font-avenirRegular">
        
        <NavBar isAuthPage={isAuthPage} userType={authLevel} />

        <div className='w-full'>
        <Routes>

            {authLevel === 'partner' && 
                <>
                  <Route index path='/' element={<PartnerHome />} />
                  <Route index path='/discussion' element={<Discussion />} />
                  <Route index path='/campaigns' element={<Campaign />} />
                  <Route index path='/inventory' element={<PartnerInventory />} />
                  <Route index path='/impact' element={<Impact />} />
                  <Route index path='/profile' element={<Profile />} />
                </>
            }

            <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='*' element={<NoMatchPage />} />

          </Routes>
        </div>

    </div>
  )
}

export default App
