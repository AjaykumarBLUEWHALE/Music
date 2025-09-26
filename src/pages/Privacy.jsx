import React from 'react'
import Footer from '../components/Footer'
const privacy =[
  {
    heading:"Introduction",
    para:"When accessing the Teletech website, we collect non-sensitive information about you during your visit. Similar to other commercial websites, our website utilises a standard technology called ‘cookies’ (see explanation below) and server logs to collect information about how our site is used. Information gathered through cookies and server logs may include the date and time of visits, the pages viewed, time spent at our site, and the websites visited just before and just after our own, as well as your IP address.", }, {
    heading:"Use of cookies",
    para:"A cookie is a very small text document, which often includes an anonymous unique identifier. Each website can send its own cookie to your browser if your browser preferences allow it, but (to protect your privacy) your browser only permits a website to access the cookies it has already sent to you, not the cookies sent to you by other sites.We use Cookies to improve your experience with our website, this includes storing session data and analytics data for analysis of website interactions and performance. If you choose to purchase products from our store (at https://shop.teletech.events) we may also store session data to ensure your browsing and checkout experiences are seamless.", },
   {
    heading:"IP ADDRESSES",
    para:"Your computer uses IP addresses every time it connects to the Internet. Your IP address is a number that is used by computers on the network to identify your computer. IP addresses are automatically collected by our web server as part of our collected “traffic data” so that we can send you data you have requested, such as the Web pages you request.", }, {
    heading:"Email Privacy",
    para:"If you choose to correspond with us through email, we may retain the content of your email messages together with your email address and our responses. We provide the same protections for these electronic communications that we employ in the maintenance of information received online, mail and telephone. This also applies when you register for our website, sign up through any of our forms using your email address or make a purchase on this site. For further information see the email policies below.", },
   {
    heading:"How we use information",
    para:"We will NOT obtain personally-identifying information about you when you visit our site, unless you choose to provide such information to us, nor will any such information be sold or otherwise transferred to unaffiliated third parties without the approval of the end-user at the time of collection. We may disclose information when legally compelled to do so, in other words, when we, in good faith, believe that the law requires it, for the protection of our legal rights.", }, {
    heading:"Email policy",
    para:"We are committed to keeping your e-mail address confidential. We do not sell, rent, or lease our subscription lists to third parties, and we will not provide your personal information to any third party individual, government agency, or company at any time unless strictly compelled to do so by law. We will use your e-mail address solely to provide timely information about our creative endeavours, updates, and material that may benefit our subscribers.. We will maintain the information you send via e-mail in accordance with applicable federal law.", },
   {
    heading:"Phone Number Policy",
    para:"We may provide the option to provide your phone number for updates related to your orders, future merchandise drops or event updates. We do not share phone numbers with third parties, except where explicitly required to do so in order to provide Teletech related services to you. For more information, read the Privacy Policy and Terms of Service from our provider.", }, {
    heading:"Can-spam Policy",
    para:"In compliance with the CAN-SPAM Act, all e-mails sent from our organisation, (excluding those that are handwritten or related to general enquiries) will clearly state who the e-mail is from and provide clear information on how to contact the sender. In addition, all e-mail messages will also have an ‘Unsubscribe’ link, so that you can remove yourself from our mailing list at any time, should you wish to do so.", },
   {
    heading:"GDPR Compliance",
    para:"In order to comply with European law we have ensured that our service terms reflect the way that we process personal data. The personal data that we process includes (but is not limited to) contact information such as first and last names, email addresses, subscription preferences and phone numbers. By using our services and this website you may come across opportunities to submit personal data or information in exchange for regular updates or to access exclusive or protected content.",
  para2:"Any submission of personal data through this website (or any subsequent Teletech websites or services) is considered verification of a right to process and handle this information within acceptable means. All of your information will remain safe and secure under the terms of our Privacy Policy and your personal information will never be processed in a way that is materially inconsistent with the circumstances under which it was provided.",
  }, {
    heading:"Opt-out",
    para:"Our site provides users the opportunity to opt-out of receiving communications from us and our partners; users who no longer wish to receive our newsletter or promotional material may opt-out of receiving these communications by clicking on the ‘Unsubscribe’ link at the bottom of our e-mails.", },
   {
    heading:"Data protection",
    para:"Email is not recognised as a secure medium of communication. For this reason, we request that you do not send private information to us by email, however, doing so is allowed at your own risk. Some of the information you may enter on our website may be transmitted securely via a secure medium known as Secure Sockets Layer, or SSL. Credit Card information and other sensitive information is never transmitted via email.",
  para2:"Teletech may use software programs to create summary statistics, which are used for such purposes as assessing the number of visitors to the different sections of our site, what information is of most and least interest, determining technical design specifications, and identifying system performance or problem areas.",
para3:"For site security purposes and to ensure that this service remains available to all users, Teletech uses software programs to monitor network traffic to identify unauthorised attempts to upload or change information, or otherwise cause damage to the sites functionality.", }, {
    heading:"Policy Changes",
    para:"We reserve the right to amend this privacy policy at any time with or without notice. However, please be assured that if the privacy policy changes in the future, we will not use the personal information you have submitted to us under this privacy policy in a manner that is materially inconsistent with this privacy policy, without your prior consent.We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained.", },
   {
    heading:"Contact",
    para:"If you have any questions regarding this policy, or your interactions with our website, please contact us here: ajaykumar8752124@gmail.com ", }, {
    heading:"credit",
    para:"This website was built by Ajay kumar",
  para2:"https://my-portfolio-pi-bice-26.vercel.app/" 
},
  

]
const Privacy = () => {
  return (
    <div>
           <div className='text-start mt-5 text-white apparel text-3xl sm:px-20 px-4 sm:mb-20 sm:flex'  style={{fontFamily:" 'Lomo Copy', sans-serif"}} >
  <h1 className=' mr-8 '> Privacy Policy</h1>

  <div className='sm:text-2xl text-[20px] sm:mt-0 mt-6 mb-4'>
    <h2>
      <span className='sm:ml-60 ml-10 opacity-50  '>Your </span> 
      <span className='flicker opacity-100'> privacy is important </span><span className='opacity-50'>to us. This policy covers how we use the information we collect.</span>
    </h2>
  </div>
</div>
<div className='text-white w-[300px] sm:w-[700px] sm:ml-[40%] items-center '>

  {
    privacy.map((item)=>(
<div className='uppercase'>
   <h1 className='text-start text-2xl '>{item.heading}</h1>
  <div className='sm:text-[12px] text-[10px]'><p className='text-start opacity-50'>{item.para}</p>
    <p className='text-start opacity-50 mt-2 '>{item.para2}</p>
      <p className='text-start opacity-50 mt-2'>{item.para3}</p></div>
</div>
    ))
  }
 
</div>
<Footer/>
    </div>
  )
}

export default Privacy
