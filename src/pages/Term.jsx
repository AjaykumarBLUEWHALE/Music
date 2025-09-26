import React from 'react'
import Footer from '../components/Footer'
const privacy =[
  {
    heading:"Introduction",
    para:"When accessing the Teletech website, we collect non-sensitive information about you during your visit. Similar to other commercial websites, our website utilises a standard technology called ‘cookies’ (see explanation below) and server logs to collect information about how our site is used. Information gathered through cookies and server logs may include the date and time of visits, the pages viewed, time spent at our site, and the websites visited just before and just after our own, as well as your IP address.", }, {
    heading:"External Links",
    para:"The Teletech website may contain links to other websites. Teletech takes no responsibility, express or implied, for the content that is displayed through links on our website or third-party websites. We also cannot guarantee the accuracy of information found at any of these domains. External sites that are featured on our website and that are not owned or controlled by Teletech do not constitute an endorsement by Teletech or any of its employees/sponsors or affiliates.By accessing this website, you are agreeing to be bound by our Terms of Service, and agree that you are solely responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained on this website are protected by applicable copyright and trademark law.", },
   {
    heading:"Store Discounts + Disputes",
    para:"If you are provided with a discount code for our store, whether acquired from winning the Inravers game, or as a winner of a competition, discounts are subject to the following terms",
para2:"If you dispute an order, we need to perform anti-fraud checks and you may be required to provide one or more of the following:"

,h:"- A copy of your order confirmation email",
h2:"- A copy of your bank statement showing the transaction",
h3:"- The date and time of your order",
h4:"- A list of items within your order",
h5:"- If you paid by card, the last 4 digits of your card number",
h6:"- If you paid via Klarna, your Klarna account number",

para3:"If we are unable to determine the authenticity of your order we may be unable to refund the cost of your order, including shipping charges."
}, {
    heading:"Mobile App",
    para:"When using our mobile app, we securely collect data during account creation. Your data is used to provide core app functionality, to allow you to manage your notification preferences and to connect you to our systems.",
para2:"During account creation, we also connect your information to our marketing systems to ensure we can contact you with account updates, security updates, order status updates and other marketing materials.",
para3:"If you have any questions about your use of the app, you can contact us at app@teletech.events. You can delete your data from our mobile app, if you need to request the removal of some or all of your personal information from our wider systems please let us know."
},
   {
    heading:"Teletech Inravers",
    para:"The Teletech Inravers game features a leaderboard system where players can score points and earn rewards. Each month, the player with the highest score on the leaderboard will automatically receive a £50 gift card for our merchandise store.",
para2:"The £50 gift card will be sent to the winner's registered email address. To redeem the gift card, the winner must use the unique code provided and the same email address used to submit their score to the leaderboard.",
para3:"To ensure fair competition, the game incorporates multiple anti-tampering measures. These include built-in monitoring systems to prevent manipulation of game sessions and the game logic. Any attempt to bypass these security measures is strictly prohibited. We retain logs of all activity within the game to prevent fraud and to maintain fair gameplay for all participants.",

}, {
    heading:"Intellectual Property",
    para:"All copyrights, trademarks, patents and other intellectual property rights related to our website, creative materials, services, and all other content and software located online and offline shall remain the sole property of Teletech and its licensors. The use of our trademarks, content and intellectual property is forbidden without the express written consent of Teletech", 
h:"You must not:",
h2:"- Republish material from our website without prior written consent;",
h3:"- Sell or rent material from our website;",
h4:"- Reproduce, duplicate, create derivative, copy or otherwise exploit material on our website for any purpose;",
h5:"- Redistribute any content from our website, including onto another website;",
h6:"If you decide to violate these terms we reserve the rights to issue criminal charges."
},
   {
    heading:"Restricted Access",
    para:"You agree to use our website only for lawful purposes, and in a way that does not infringe the rights of, restrict or inhibit others' use and enjoyment of the website. Prohibited behaviour includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content or disrupting the normal flow of dialogue within our website.You must not use our website to send unsolicited commercial messages. You must not use the content on our website for any marketing related purpose without our express written consent.",
para2:"Any attempt to circumvent security measures, tamper with APIs, or engage in any activity that seeks to gain unauthorised access to our website, systems, servers, or associated networks is strictly prohibited. This includes, but is not limited to, hacking, reverse engineering, injecting malicious code, or otherwise interfering with the integrity or functionality of our services. Such actions will be considered unlawful and may result in the immediate termination of access to our website, along with potential legal action." }, {
    heading:"Can-spam Policy",
    para:"We may in the future need to restrict access to parts (or all) of our website and reserve full rights to do so. If, at any point, we provide you with a username and password for you to access restricted areas of our website, you must ensure that both your username and password are kept confidential, failure to do so may result in termination of your account.", },
   {
    heading:"Limitations and liability",
    para:"Teletech makes no representations, warranties, or assurances regarding the accuracy, currency, or completeness of the content contained within our website. All the materials on this site are provided ‘as is’ without any express or implied warranty of any kind, including warranties of merchantability, non-infringement of intellectual property or fitness for any particular purpose. In no event shall Teletech or its agents or associates be liable for any damages whatsoever (including, without limitation, damages for loss of profits, business interruption, loss of information, injury or death) arising from the use or inability to use the materials, even if Teletech has been advised of the potential for such losses or damages.",
    },
     {
    heading:"Policy Changes",
    para:"We reserve the right to amend our terms of service at any time with or without notice. However, please be assured that if the terms of service change in the future, we will not use the personal information you have submitted to us under our privacy policy in a manner that is materially inconsistent with the consent you previously provided. We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained.", },
  {
    heading:"Contact",
    para:"If you have any questions regarding this policy, or your interactions with our website, please contact us here: ajaykumar8752124@gmail.com ", }, {
    heading:"credit",
    para:"This website was built by Ajay kumar",
  para2:"https://my-portfolio-pi-bice-26.vercel.app/" 
},
  

]
const Term = () => {
  return (
    <div>
           <div className='text-start mt-5 text-white apparel text-3xl sm:px-20 px-4 sm:mb-20 sm:flex'  style={{fontFamily:" 'Lomo Copy', sans-serif"}} >
  <h1 className=' mr-8 '> Terms of Service</h1>

  <div className='sm:text-2xl text-[20px] sm:mt-0 mt-6 mb-4'>
    <h2>
      <span className='sm:ml-60 ml-10 opacity-50  '>Our  includes essential information for using our digital services. </span> 
      <span className='flicker opacity-100'>Terms of Service </span><span className='opacity-50'>includes essential information for using our digital services.</span>
    </h2>
  </div>
</div>
<div className='text-white w-[300px] sm:w-[700px] sm:ml-[40%] items-center '>

  {
    privacy.map((item)=>(
<div className='uppercase text-start'>
   <h1 className=' text-2xl '>{item.heading}</h1>
 <div className= ' sm:text-[12px] text-[10px]'>
     <p className=' opacity-50'>{item.para}</p>
    <p className=' opacity-50 mt-2 '>{item.para2}</p>
    <h1 className='opacity-50'>{item.h}</h1>
    <h1 className='opacity-50'>{item.h2}</h1>
    <h1 className='opacity-50'>{item.h3}</h1>
    <h1 className='opacity-50'>{item.h4}</h1>
    <h1 className='opacity-50'>{item.h5}</h1>
    <h1 className='opacity-50'>{item.h6}</h1>
      <p className=' opacity-50 mt-2'>{item.para3}</p>
 </div>
</div>
    ))
  }
 
</div>
<Footer/>
    </div>
  )
}

export default Term
