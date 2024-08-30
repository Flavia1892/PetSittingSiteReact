import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Privacy() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div class="container">
        <div class="row align-items-start privacyPolicy">
          <div class="col colPrivacy">
            <div class="row justify-center text-4xl text-blue-900 italic mb-5 mt-2">
              Privacy Policy
            </div>
            <div class="row justify-center mb-5 px-4">
              At Pet Sitters United Ltd. we take care of our users
              confidentiality. The present policy describes the information that
              we process on the www.caretopets.com site, how we collect them,
              for what purpose and how we protect them.
            </div>
            <div class="row justify-center mb-5">
              What kind of data we collect? For our site to fulfill its purpose
              and to help parents and owners to find caregivers, we need to
              process some data about the persons who sign up on
              www.caretopets.com as providers of sitting services and about the
              persons looking for this services. What you need to know is that
              we only store data about you and we are not processing it in any
              other way.
            </div>
            <div class="row justify-center mb-5">
              <b>Information and content that you provide.</b>
              <p class="px-3">
                We store the data you offer when you use the site, specifically
                when you create an account (either as a sitter/ caregiver or as
                an parent/ owner looking for a sitter, when you create bookings,
                public requests or send messages or other info like: pictures,
                text, location. Info about the device. We collect info about the
                device from which you accessed the site, specifically if you
                accessed the site from the computer, tablet or phone. This is to
                ensure a good navigation experience and to better understand how
                to constantly improve the site so that you can use it more easy
                and safely. These types of data are collected through Cookie
                modules.
              </p>
            </div>
            <div class="row justify-center mb-5 text-start pl-2">
              <ul>
                <b>Information we store about the devices are:</b>
                <li>
                  • Device characteritics: info about operating system, browser
                  type and screen resolution.
                </li>
                <li>
                  •Device operations: info about the way you navigate through
                  the site, specifically, the buttons clicked on the site or
                  mouse movements.
                </li>
                <li>•Identifiers: unique identifiers, device identifiers.</li>
                <li>
                  • Network and connectin: info like the name of the mobile
                  provider or of the internet service provider, phone number, IP
                  address.
                </li>
              </ul>
            </div>
            <div class="row justify-center mb-5 text-start pl-4">
              <b> How we use these information?</b>
              We use the information we have and the options you express for:{" "}
              <br></br>• To fulfill the scope of www.petsittersunited.com,
              namely to facilitate parents/ owners to find a sitter/ caregiver,
              and for sitters to be contacted by potential clients). <br></br>•
              To improve www.petsittersunited.com website, including for
              personalizing the site and its functions. This can be achieved
              through surveys, suggestions forms, research, tests or by
              implementing new features). <br></br>• To promote integrity,
              seriousness, safety and security: We use the information we have
              to verify the accounts and the activity of the pet sitters, to
              combat the creation of fake or multiple accounts from the same
              person, to combat innapropiate behaviour and for avoiding negative
              experiences. In this scope, we use the data we have to investigate
              possible violations of our policies.<br></br>
              •To communicate with you: We use the info we have to send
              messages, emails with the purpose to communicate with you, to
              inform you about our policies and conditions and to respond when
              you contact us.
            </div>
            <div class="row justify-center mb-5 text-center">
              <ul class="list-disc pl-8">
                <p class="text-2xl pb-3 font-medium underline">
                  Summary of the data we collect, for what purpose and how we
                  use them
                </p>
                <li class="text-start">
                  <p class="font-bold">Email Address </p>It's used in order to
                  receive notifications about reservations and for us to be able
                  to communicate with our users. We DO NOT share your email with
                  other visitors, parents, owners, sitters, caregivers or third
                  parties.{" "}
                </li>
                <li class="text-start">
                  <p class="font-bold">Phone Number</p> It's used in order to
                  receive sms notifications about requests and reservations and
                  thus learning sooner about their news, also for us to be able
                  to communicate with you. We share phone numbers of the
                  sitters/ caregivers only to parents/ owners who have an active
                  subscription
                </li>
                <li class="text-start">
                  <p class="font-bold">Name </p>We protect the identity of the
                  users by showing only their first name.
                </li>
                <li class="text-start">
                  {" "}
                  <p class="font-bold"> The city and street where you live </p>
                  For Sitters, we show on their public profile, the city and
                  street where they live, without showing the street number.
                  This facilitates parents/ owners choosing a right sitter. To
                  help sitters to determine the feasabilty of a request, owners
                  must provide details about their location. Also, we use info
                  about the location to calculate distance from sitters and
                  potential clients, thus offering relevant results.{" "}
                </li>
                <li class="text-start font-bold">
                  We DO NOT use credit cards for payment at the moment and all
                  reservations require a bank deposit as and advance{" "}
                </li>
                <li class="text-start">
                  <p class="font-bold">Images from sitting time</p>Sitters can
                  send us images from during sitting, which with their
                  agreemenet we post in our Facebook album, we can process them
                  as social media posts or in some case we use them in our
                  promotional materials
                </li>
              </ul>
            </div>
            <div class="row justify-center mb-5 text-center">
              <p class="font-bold pb-2 text-xl">
                {" "}
                Email and SMS notifications{" "}
              </p>
              <p class="px-6">
                For facilitating and accelerating the time it takes to find a
                sitter, we send you a series of emails and sms (transactional)
                regarding news and reminders about your received or sent
                reservations and requests, as well as emails about the
                improvements which we made to the platform.
              </p>
            </div>
            <div class="row justify-center mb-5 text-center px-3">
              <p class="font-bold text-xl pb-2"> Cookie Policy</p>
              <p class="text-start">
                {" "}
                Cookies are small text files, downloaded in the memory of your
                computer, phone or tablet, which play the role of the site's
                memory. Cookies itself do not require personal data in order to
                be used and in most cases they do not identify internet users
              </p>
              <ul class="text-start list-disc pt-2">
                <p class="font-bold text-lg italic pb-2 pt-4">
                  What types of cookies we use?
                </p>
                <li>
                  <b>Strictly necessary Cookies for website functioning:</b>{" "}
                  choosen language and account registration cookies that tell
                  you if you are signed up or not and it shows you the account
                  with which you are signed in Website performance
                </li>
                <li>
                  <b> Website performance Cookies: </b>these analyze the was
                  users use our website and allows us to improve pur services,
                  as well as to measure the audience and traffic of the site's
                  pages: Google Analytics, Hotjar, Facebook Marketing Cookies:
                  helps us measure the performance of pur marketing campaigns:
                  Google, Facebook
                </li>
              </ul>
              <p class="pt-4 text-start">
                When accesing the website we inform you of the fact that our
                platform uses cookies and we offer you the posibility to learn
                more about how we use these cookies, as well as to give your
                consent regarding the use of Cookies (performance cookies,
                marketing cookies, functional cookies). However, in order for
                you to use pur platform we need to use the cookis in the
                Strictly necessary category, otherwise you will not be able to
                use our site. We can also use, without your explicit consent,
                cookies that keep your anonimity, which do not identify you
                according to personal data law
              </p>
              <p class="pt-4 text-start">
                <b>How can you modify cookie settings? </b>
                <br></br>
                You can adjust your confidentality settigs in the browser in
                order to block all cookies; however, this can badly affect your
                navigation experience on the website. Your browser can also
                allow you to delete all cookie modules when closing the browser.
                This option, however, leads to deleting of the persistent
                cookies, which can store your preferences and personalized
                settings
              </p>
            </div>
            <div class="row justify-center mb-5 text-center px-3">
              <p class="font-bold text-2xl pb-4 italic">
                {" "}
                How can you exercise the rights provided in the General Data
                Protection Regulation?
              </p>
              <p class="text-start pb-1">
                {" "}
                As it is provided in the GDPR, you have the right to access,
                modify, export and delete your data.<br></br>
              </p>
              <p class="text-start pt-3 pb-2">
                <b>The right to access the data </b>cosists in having access to
                the data we have about you (sitters/caregivers or parents/
                owners signed up on the site).
              </p>
              <p class="text-start">
                <b>The data we collect are:</b> name, phone number, email
                address, current location, IP, uploaded pictures and to access
                to this data you have to access the My Profile section from the
                menu.
              </p>
              <p class="text-start pb-2">
                <b>The right to modify your data </b> consists in providing you
                the possibility do modify your data whenever you want and also
                to change the agreemenets you have given us, for example you can
                change your agreement to receive email newsletters.{" "}
              </p>
              <p class="text-start pb-2">
                <b> The right to export your data,</b> reresents your right to
                receive your personal data in a structured format.{" "}
              </p>
              <p class="text-start pb-2">
                <b>The right to delete your data, </b>represents deleting your
                personal data, in case your data is not needed to fulfill the
                purpose for which they were collected.{" "}
              </p>
              <p class="text-start pb-2">
                <b>The right to access data,</b>
              </p>
              <p class="text-start pb-2">
                <b> The right to modify data </b>- you can personally exercise
                from your profile or user account.
              </p>

              <p class="text-start pb-2">
                <b> The right to delete your data</b>
              </p>
              <p class="text-start pb-2">
                <b>The right to export your data -</b>
                you can exercise by sending us a written request on our email
                address: petsittersunited@gmail.com, and we will respond to your
                request in maximum 30 days, from the moment you sent the
                request.
              </p>
            </div>
            <div class="row justify-center mb-5 text-center px-3">
              <p class="font-bold text-2xl pb-2">Third parties</p>
              <p class="text-start">
                We do not sell, exchange or transfer in any way your personal
                data to third parties, without noticing you first and having
                your explicit agreement. Exceptions are The hosting provider and
                other third parties that help us operating and delivering our
                service to our users, as long as they maintain data
                confidentiality, as well as the law enforcement institutions who
                have to right to receive user data on request.
              </p>
            </div>
            <div class="row justify-center mb-5 text-center px-3">
              <p class="font-bold text-2xl pb-2">
                How we protect the data that we collect?
              </p>
              <p class="text-start">
                We limit the data collected to which is strictly necessary. Your
                personal data are stored or protected servers, accisible only to
                authorized personnel and only to provide the service for which
                the site was created. All the communication between the server
                and user is SSL encrypted (Secure Socket Layer).
              </p>
            </div>
            <div class="row justify-center mb-5 text-center px-3">
              <p class="font-bold text-2xl pb-2">
                Storing data, disabling and deleting you account
              </p>
              <p class="text-center">
                We store the pet sitter data, during the time you have an active
                account on our website, and later, if you delete your account,
                the reservations you have up to that time will appear as
                anonymus.
              </p>
            </div>
            <div class="row justify-center mb-5 text-center px-3">
              <p class="font-bold text-2xl pb-2">
                How do we notify you about the changes made to this policy?
              </p>
              <p class="text-center">
                We will send you a notification before we make any changes to
                this policy.
              </p>
            </div>
            <div class="row justify-center mb-5 text-center px-3">
              <p class="font-bold text-2xl pb-2">
                How can you address questions regarding this policies and about
                how the site works?
              </p>
              <p class="text-center">
                If you have questions about the present Policies you can address
                them by email at petsittersunited@gmail.com
              </p>
            </div>
            <div class="mb-3">
              <Button variant="primary" onClick={handleShow}>
                Terms and Conditions
              </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Terms and Conditions</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <b>
                  {" "}
                  Woohoo, you are reading our Terms and Conditions! May the Gods
                  help you for surely we will and cannot. Valar Morghulis!
                </b>
                <br></br>
                <p class="text-red-800">
                  Also, we will request your firstborn!
                </p>
                <br></br>
                <p class="font-bold">
                  {" "}
                  The rest is copy paste for we are too lazy and dumb to write
                  some more...{" "}
                </p>
                This agreement applies as between you, the User of this Website
                and We Are Funny Project Limited, the owner(s) of this Website.
                Your agreement to comply with and be bound by Clauses 1, 2, 4 –
                11 and 15 – 25 of these Terms and Conditions is deemed to occur
                upon your first use of the Website. Clauses 3 and 12 – 14 apply
                only to the sale of Services. If you do not agree to be bound by
                these Terms and Conditions, you should stop using the Website
                immediately. No part of this Website is intended to constitute a
                contractual offer capable of acceptance. Your order constitutes
                a contractual offer and Our acceptance of that offer is deemed
                to occur upon Our sending a confirmation email to you indicating
                that your order has been accepted. 1. Definitions and
                Interpretation In this Agreement the following terms shall have
                the following meanings: "Account": means collectively the
                personal information, Payment Information and credentials used
                by Users to access Paid Content and / or any communications
                System on the Website; "Content": means any text, graphics,
                images, audio, video, software, data compilations and any other
                form of information capable of being stored in a computer that
                appears on or forms part of this Website; "Facilities": means
                collectively any online facilities, tools, services or
                information that We Are Funny Project Limited makes available
                through the Website either now or in the future; "Services":
                means the services available to you through this Website,
                specifically use of the We Are Funny Project Limited proprietary
                e-learning platform; "Payment Information": means any details
                required for the purchase of Services from this Website. This
                includes, but is not limited to, credit / debit card numbers,
                bank account numbers and sort codes; "Premises": Means Our
                place(s) of business located at 61 Bridge Street, Kington, HR5
                3DJ; "System": means any online communications infrastructure
                that We Are Funny Project Limited makes available through the
                Website either now or in the future. This includes, but is not
                limited to, web-based email, message boards, live chat
                facilities and email links; "User" / "Users": means any third
                party that accesses the Website and is not employed by We Are
                Funny Project Limited and acting in the course of their
                employment; "Website": means the website that you are currently
                using (www.learnworlds.com) and any sub-domains of this site
                (e.g. subdomain.learnworlds.com, wearefunnyproject.com) unless
                expressly excluded by their own terms and conditions; and
                "We/Us/Our": means We Are Funny Project Limited, a company
                incorporated with the Registrar of Companies for England and
                Wales with Company registration Number 08537398 of 71-75, 61
                Bridge Street, Kington, HR5 3DJ. 2. Age Restrictions Persons
                under the age of 18 should use this Website only with the
                supervision of an Adult. Payment Information must be provided by
                or with the permission of an Adult. 3. Business Customers These
                Terms and Conditions also apply to customers procuring Services
                in the course of business. 4. Intellectual Property 4.1 Subject
                to the exceptions in Clause 5 of these Terms and Conditions, all
                Content included on the Website, unless uploaded by Users,
                including, but not limited to, text, graphics, logos, icons,
                images, sound clips, video clips, data compilations, page
                layout, underlying code and software is the property of We Are
                Funny Project Limited, Our affiliates or other relevant third
                parties. By continuing to use the Website you acknowledge that
                such material is protected by applicable United Kingdom and
                International intellectual property and other laws. 4.2 Subject
                to Clause 6 you may not reproduce, copy, distribute, store or in
                any other fashion re-use material from the Website unless
                otherwise indicated on the Website or unless given Our express
                written permission to do so. 5. Third Party Intellectual
                Property 5.1 Unless otherwise expressly indicated, all
                Intellectual Property rights including, but not limited to,
                Copyright and Trademarks, in product images and descriptions
                belong to the manufacturers or distributors of such products as
                may be applicable. 5.2 Subject to Clause 6 you may not
                reproduce, copy, distribute, store or in any other fashion
                re-use such material unless otherwise indicated on the Website
                or unless given express written permission to do so by the
                relevant manufacturer or supplier. 6. Fair Use of Intellectual
                Property Material from the Website may be re-used without
                written permission where any of the exceptions detailed in
                Chapter III of the Copyright Designs and Patents Act 1988 apply.
                7. Links to Other Websites This Website may contain links to
                other sites. Unless expressly stated, these sites are not under
                the control of We Are Funny Project Limited or that of Our
                affiliates. We assume no responsibility for the content of such
                websites and disclaim liability for any and all forms of loss or
                damage arising out of the use of them. The inclusion of a link
                to another site on this Website does not imply any endorsement
                of the sites themselves or of those in control of them. 8. Links
                to this Website Those wishing to place a link to this Website on
                other sites may do so only to the home page of the site
                www.learnworlds.com without Our prior permission. Deep linking
                (i.e. links to specific pages within the site) requires Our
                express written permission. To find out more please contact Us
                by email at info@learnworlds.com or call us in the following
                number: +44 20 81441441. 9. Use of Communications Facilities 9.1
                When using any System on the Website you should do so in
                accordance with the following rules. Failure to comply with
                these rules may result in your Account being suspended or
                closed: 9.1.1 You must not use obscene or vulgar language; 9.1.2
                You must not submit Content that is unlawful or otherwise
                objectionable. This includes, but is not limited to, Content
                that is abusive, threatening, harassing, defamatory, ageist,
                sexist or racist; 9.1.3 You must not submit Content that is
                intended to promote or incite violence; 9.1.4 It is advised that
                submissions are made using the English language as We may be
                unable to respond to enquiries submitted in any other languages;
                9.1.5 The means by which you identify yourself must not violate
                these Terms and Conditions or any applicable laws; 9.1.6 You
                must not impersonate other people, particularly employees and
                representatives of We Are Funny Project Limited or Our
                affiliates; and 9.1.7 You must not use Our System for
                unauthorised mass-communication such as "spam" or "junk mail".
                9.2 You acknowledge that We Are Funny Project Limited reserves
                the right to monitor any and all communications made to Us or
                using Our System. 9.3 You acknowledge that We Are Funny Project
                Limited may retain copies of any and all communications made to
                Us or using Our System. 9.4 You acknowledge that any information
                you send to Us through Our System may be modified by Us in any
                way and you hereby waive your moral right to be identified as
                the author of such information. Any restrictions you may wish to
                place upon Our use of such information must be communicated to
                Us in advance and We reserve the right to reject such terms and
                associated information. 10. Accounts 10.1 In order to procure
                Services on this Website and to use certain other parts of the
                System, you are required to create an Account which will contain
                certain personal details and Payment Information which may vary
                based upon your use of the Website as We may not require payment
                information until you wish to make a purchase. By continuing to
                use this Websiteyou represent and warrant that: 10.1.1 all
                information you submit is accurate and truthful; 10.1.2 you have
                permission to submit Payment Information where permission may be
                required; and 10.1.3 you will keep this information accurate and
                up-to-date. Your creation of an Account is further affirmation
                of your representation and warranty. 10.2 It is recommended that
                you do not share your Account details, particularly your
                username and password. We accept no liability for any losses or
                damages incurred as a result of your Account details being
                shared by you. If you use a shared computer, it is recommended
                that you do not save your Account details in your internet
                browser. 10.3 If you have reason to believe that your Account
                details have been obtained by another person without consent,
                you should contact Us immediately to suspend your Account and
                cancel any unauthorised orders or payments that may be pending.
                Please be aware that orders or payments can only be cancelled up
                until provision of Services has commenced. In the event that an
                unauthorised provision commences prior to your notifying Us of
                the unauthorised nature of the order or payment then you shall
                be charged for the period from the commencement of the provision
                of services until the date you notified us and may be charged
                for a billing cycle of one month. 10.4 When choosing your
                username you are required to adhere to the terms set out above
                in Clause 9. Any failure to do so could result in the suspension
                and/or deletion of your Account. 11. Termination and
                Cancellation of Accounts 11.1 Either We Are Funny Project
                Limited or you may terminate your Account. If We terminate your
                Account, you will be notified by email and an explanation for
                the termination will be provided. Notwithstanding the foregoing,
                We reserve the right to terminate without giving reasons. 11.2
                If We terminate your Account, any current or pending orders or
                payments on your Account will be cancelled and provision of
                Services will not commence. 12. Services, Pricing and
                Availability 12.1 Whilst every effort has been made to ensure
                that all general descriptions of Services available from We Are
                Funny Project Limited correspond to the actual Services that
                will be provided to you, We are not responsible for any
                variations from these descriptions as the exact nature of the
                Services may vary depending on your individual requirements and
                circumstances. This does not exclude Our liability for mistakes
                due to negligence on Our part and refers only to variations of
                the correct Services, not different Services altogether. Please
                refer to sub-Clause 13.8 for incorrect Services. 12.2 Where
                appropriate, you may be required to select the required Plan of
                Services. 12.3 We neither represent nor warrant that such
                Services will be available at all times and cannot necessarily
                confirm availability until confirming your Order. Availability
                indications are not provided on the Website. 12.4 All pricing
                information on the Website is correct at the time of going
                online. We reserve the right to change prices and alter or
                remove any special offers from time to time and as necessary.
                12.5 In the event that prices are changed during the period
                between an order being placed for Services and Us processing
                that order and taking payment, then the price that was valid at
                the time of the order shall be used. 12.6 All prices on the
                Website do not include VAT. In accordance with HM Revenue &
                Customs VAT Notice 700/1 (February 2014) and supplements
                thereof, We Are Funny Project Limited is not yet liable for VAT
                and therefore not VAT registered and does not possess a VAT
                number. 13. Orders and Provision of Services 13.1 No part of
                this Website constitutes a contractual offer capable of
                acceptance. Your order constitutes a contractual offer that We
                may, at Our sole discretion, accept. Our acceptance is indicated
                by Us sending to you an order confirmation email. Only once We
                have sent you an order confirmation email will there be a
                binding contract between We Are Funny Project Limited and you.
                13.2 Order confirmations under sub-Clause 13.1 will be sent to
                you before the Services begin and shall contain the following
                information: 13.2.1 Confirmation of the Services ordered
                including full details of the main characteristics of those
                Services; 13.2.2 Fully itemised pricing for the Services ordered
                including, where appropriate, taxes, delivery and other
                additional charges; 13.2.3 Relevant times and dates for the
                provision of the Services; 13.2.4 User credentials and relevant
                information for accessing those services. 13.3 If We, for any
                reason, do not accept your order, no payment shall be taken
                under normal circumstances. In any event, any sums paid by you
                in relation to that order will be refunded within 14 calendar
                days. 13.4 Payment for the Services shall be taken via your
                chosen payment method, immediately for any setup fee that
                corresponds to the service plan you purchased and at the same
                day of each subsequent month (“billing cycle”) for charges
                accrued during the previous month (“billing cycle”) AND/OR as
                indicated in the order confirmation you received. 13.5 We aim to
                fulfill your Order within 2-3 working days or if not, within a
                reasonable period following your Order, unless there are
                exceptional circumstances. If we cannot fulfill your Order
                within a reasonable period, we will inform you at the time you
                place the Order by a note on the relevant web page or by
                contacting you directly after you place your Order. Time is not
                of the essence of the Contract, which means we will aim to
                fulfill your Order within any agreed timescales but this is not
                an essential term of the Contract and we will not be liable to
                you if we do not do so. If the Services are to begin within 14
                calendar days of Our acceptance of your order, at your express
                request, you will be required to expressly acknowledge that your
                statutory cancellation rights, detailed below in Clause 14, will
                be affected. 13.6 We Are Funny Project Limited shall use all Our
                reasonable endeavours to provide the Services with reasonable
                skill and care, commensurate with best trade practice. 13.7 In
                the event that Services are provided that are not in conformity
                with your order and thus incorrect, you should contact Us
                immediately to inform Us of the mistake. We will ensure that any
                necessary corrections are made within five (5) working days.
                Additional terms and conditions may apply to the provision of
                certain Services. You will be asked to read and confirm your
                acceptance of any such terms and conditions when completing your
                Order. 14. Cancellation of Orders and Services We want you to be
                completely satisfied with the Products or Services you order
                from We Are Funny Project Limited. If you need to speak to us
                about your Order, then please contact customer care on +44 20
                81441441, or by email at support@learnworlds.com or write to us
                at our address (see section 1 above). You may cancel an Order
                that we have accepted or cancel the Contract. If any Specific
                Terms accompanying the Service contain terms about cancelling
                the Service, the cancellation policy in the Specific Terms will
                apply. 14.1 If you are a consumer based within the European
                Union, you have a statutory right to a “cooling off” period.
                This period begins once your order is confirmed and the contract
                between We Are Funny Project Limited and you is formed and ends
                at the end of 14 calendar days after that date. If you change
                your mind about the Services within this period and wish to
                cancel your order, please inform Us immediately using the
                following email: sales@yourcompany.com Your right to cancel
                during the cooling off period is subject to the provisions of
                sub-Clause 14.2. 14.2 As specified in sub-Clause 13.6, if the
                Services are to begin within the cooling off period you are
                required to make an express request to that effect. By
                requesting that the Services begin within the 14 calendar day
                cooling off period you acknowledge and agree to the following:
                14.2.1 If the Services are fully performed within the 14
                calendar day cooling off period, you will lose your right to
                cancel after the Services are complete. 14.2.2 If you cancel the
                Services after provision has begun but is not yet complete you
                will still be required to pay for the Services supplied up until
                the point at which you inform Us that you wish to cancel. The
                amount due shall be calculated in proportion to the full price
                of the Services and the actual Services already provided. Any
                sums that have already been paid for the Services shall be
                refunded subject to deductions calculated in accordance with the
                foregoing. Refunds, where applicable, will be issued within 5
                working days and in any event no later than 14 calendar days
                after you inform Us that you wish to cancel. 14.3 Cancellation
                of Services after the 14 calendar day cooling off period has
                elapsed shall be subject to the specific terms governing those
                Services and may be subject to a minimum contract duration. 15.
                Privacy Use of the Website is also governed by Our Privacy
                Policy (http://www.learnworlds.com/privacy-policy/) which is
                incorporated into these Terms and Conditions by this reference.
                To view the Privacy Policy, please click on the link above. 16.
                How We Use Your Personal Information (Data Protection) 16.1 All
                personal information that We may collect (including, but not
                limited to, your name and address) will be collected, used and
                held in accordance with the provisions of the Data Protection
                Act 1998 and your rights under that Act. 16.2 We may use your
                personal information to: 16.2.1 Provide Our Services to you;
                16.2.2 Process your payment for the Services; and 16.2.3 Inform
                you of new products and services available from Us. You may
                request that We stop sending you this information at any time.
                16.3 In certain circumstances (if, for example, you wish to
                purchase Services on credit), and with your consent, We may pass
                your personal information on to credit reference agencies. These
                agencies are also bound by the Data Protection Act 1998 and
                should use and hold your personal information accordingly. 16.4
                We will not pass on your personal information to any other third
                parties without first obtaining your express permission. 17.
                Disclaimers 17.1 We make no warranty or representation that the
                Website will meet your requirements, that it will be of
                satisfactory quality, that it will be fit for a particular
                purpose, that it will not infringe the rights of third parties,
                that it will be compatible with all systems, that it will be
                secure and that all information provided will be accurate. We
                make no guarantee of any specific results from the use of our
                Service or Services. 17.2 No part of this Website is intended to
                constitute advice and the Content of this Website should not be
                relied upon when making any decisions or taking any action of
                any kind. 17.3 No part of this Website is intended to constitute
                a contractual offer capable of acceptance. 17.4 Whilst We use
                reasonable endeavours to ensure that the Website is secure and
                free of errors, viruses and other malware, you are strongly
                advised to take responsibility for your own internet security,
                that of your personal details and your computers. 18. Changes to
                the Facilities and these Terms and Conditions We reserve the
                right to change the Website, its Content or these Terms and
                Conditions at any time. You will be bound by any changes to the
                Terms and Conditions from the first time you use the Website
                following the changes. If We are required to make any changes to
                these Terms and Conditions by law, these changes will apply
                automatically to any orders currently pending in addition to any
                orders placed by you in the future. 19. Availability of the
                Website 19.1 The Website is provided “as is” and on an “as
                available” basis. We Are Funny Project Limited uses industry
                best practices to provide a high uptime, including a
                fault-tolerant architecture hosted in cloud servers. We give no
                warranty that the Website or Facilities will be free of defects
                and / or faults and we do not provide any kind of refund for
                outages. We provide no warranties (express or implied) of
                fitness for a particular purpose, accuracy of information,
                compatibility and satisfactory quality. 19.2 We accept no
                liability for any disruption or non-availability of the Website
                resulting from external causes including, but not limited to,
                ISP equipment failure, host equipment failure, communications
                network failure, power failure, natural events, acts of war or
                legal restrictions and censorship. 20. Limitation of Liability
                20.1 To the maximum extent permitted by law, We accept no
                liability for any direct or indirect loss or damage, foreseeable
                or otherwise, including any indirect, consequential, special or
                exemplary damages arising from the use of the Website or any
                information contained therein. You should be aware that you use
                the Website and its Content at your own risk. 20.2 Nothing in
                these Terms and Conditions excludes or restricts LearnWolds
                Ltd’s liability for death or personal injury resulting from any
                negligence or fraud on the part of LearnWolds Ltd. 20.3 Nothing
                in these Terms and Conditions excludes or restricts LearnWolds
                Ltd’s liability for any direct or indirect loss or damage
                arising out of the incorrect provision of Services or out of
                reliance on incorrect information included on the Website. 20.4
                In the event that any of these terms are found to be unlawful,
                invalid or otherwise unenforceable, that term is to be deemed
                severed from these Terms and Conditions and shall not affect the
                validity and enforceability of the remaining Terms and
                Conditions. This term shall apply only within jurisdictions
                where a particular term is illegal. 21. No Waiver In the event
                that any party to these Terms and Conditions fails to exercise
                any right or remedy contained herein, this shall not be
                construed as a waiver of that right or remedy. 22. Previous
                Terms and Conditions In the event of any conflict between these
                Terms and Conditions and any prior versions thereof, the
                provisions of these Terms and Conditions shall prevail unless it
                is expressly stated otherwise. 23. Third Party Rights Nothing in
                these Terms and Conditions shall confer any rights upon any
                third party. The agreement created by these Terms and Conditions
                is between you and LearnWolds Ltd. 24. Communications 24.1 All
                notices / communications shall be given to Us either by post to
                Our Premises (see address above) or by email to
                info@wearefunnyproject.com. Such notice will be deemed received
                3 days after posting if sent by first class post, the day of
                sending if the email is received in full on a business day and
                on the next business day if the email is sent on a weekend or
                public holiday. 24.2 We may from time to time, if you opt to
                receive it, send you information about Our products and/or
                services. If you do not wish to receive such information, please
                click on the ‘Unsubscribe’ link in any email which you receive
                from Us. 25. Law and Jurisdiction These Terms and Conditions and
                the relationship between you and We Are Funny Project Limited
                shall be governed by and construed in accordance with the Law of
                England and Wales and We Are Funny Project Limited and you agree
                to submit to the exclusive jurisdiction of the Courts of England
                and Wales.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default Privacy;
