export const POLICY_ITEMS_TYPES = {
  TITLE: 'title',
  SUBTITLE: 'subtitle',
  TEXT: 'text',
  UL: 'unordered list',
  LINK: 'link',
} as const;

export const PRIVACY_POLICY_ITEMS = [
  [
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      childrenItems: [
        {
          type: POLICY_ITEMS_TYPES.TEXT,
          text: 'PLEASE READ THE FOLLOWING PRIVACY POLICY CAREFULLY. WHEN YOU USE ANY GAME, APP, OR SERVICE FROM PARAM LABS, INC., ITS SUBSIDIARIES OR AFFILIATES (“PARAM GAMES”) YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS.',
        },
      ],
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'PARAM GAMES respects your privacy and understands the importance of protecting your personal information. We will only collect information we need to fulfill your requests and our legitimate business objectives. We will never send you marketing communications without your consent, and we will never share your personal information with third parties that are not bound by our privacy policy unless you tell us we can.',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'By downloading or using any Game or App or by registering for an Account, we may transfer and store your account information. By registering, you agree that PARAM GAMES may process your data in accordance with the following privacy policy and that you will abide by PARAM GAMES’ Terms of Service.',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      childrenItems: [
        {
          type: POLICY_ITEMS_TYPES.TEXT,
          text: 'BY DOWNLOADING OR USING A GAME OR APP OR BY REGISTERING FOR AN ACCOUNT, YOU AGREE TO THE PARAM GAMES PRIVACY POLICY. IF YOU DO NOT AGREE TO THIS POLICY, PLEASE DO NOT USE ANY PARAM GAMES GAME, APP OR SERVICE. If we change our Privacy Policy, we will post those changes to this Privacy Policy, the home page or other places so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we disclose it. We reserve the right to modify this Privacy Policy at any time, so please review it frequently. If we make material or significant changes to this Privacy Policy, we will notify you by email and/or by a notice at  ',
        },
        {
          type: POLICY_ITEMS_TYPES.LINK,
          text: 'www.paramlabs.io',
          href: 'https://www.paramlabs.io/',
        },
        {
          type: POLICY_ITEMS_TYPES.TEXT,
          text: ' and/or during log in. Revisions to terms affecting existing PARAM GAMES SERVICES shall be effective thirty (30) days after posting. Your continued use of our Games, Apps and services will signify your acceptance of the changes to our Privacy Policy.',
        },
      ],
    },
  ],

  [
    {
      type: POLICY_ITEMS_TYPES.TITLE,
      text: 'PARAM GAMES ONLINE PRIVACY POLICY:',
    },
    {
      type: POLICY_ITEMS_TYPES.TITLE,
      text: 'INTRODUCTION',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'PARAM GAMES respects the privacy rights of consumers and recognizes the importance of protecting the information collected about you. We have adopted this global Privacy Policy to explain how we store and use personal and non-personal information we collect online on our websites, during your use of our website, online products and/or services (including online game play).',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'PARAM GAMES DOES NOT KNOWINGLY COLLECT INFORMATION FROM CHILDREN UNDER 13. IF YOU ARE UNDER 13, PLEASE DO NOT SUBMIT ANY PERSONALLY IDENTIFIABLE INFORMATION TO PARAM GAMES.',
    },
  ],

  [
    {
      type: POLICY_ITEMS_TYPES.TITLE,
      text: 'WHAT IS PERSONAL INFORMATION AND WHEN DOES PARAM GAMES COLLECT IT?',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'PARAM GAMES collects both personal and non-personal consumer information. Personal information collected by PARAM GAMES is discussed below in this section. Non-personal information is discussed below in Section 3.',
    },
    {
      type: POLICY_ITEMS_TYPES.SUBTITLE,
      text: 'A. Personal Information collected by PARAM GAMES',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'Personal information is information that identifies you and that may be used to contact you online or off-line. PARAM GAMES may collect personal information during registration and/or use of our Games, Apps and Services. PARAM GAMES also may maintain log files which contain IP addresses. An IP address is a numeric address that may be assigned to your computer by your Internet Service Provider. In general, we use log files to monitor activity in our Games and Apps and to troubleshoot technical problems. In the event of user abuse of our Games, Apps or Services, however, we may block',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'certain IP addresses. If available, IP addresses and device IDs may be used to personally identify you in order to enforce our Terms of Service.',
    },
    {
      type: POLICY_ITEMS_TYPES.SUBTITLE,
      text: 'B. Personal information provided to PARAM GAMES by Third Parties',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'We may also receive other personal information from third parties in connection with the operation and distribution of our Games, Apps and Services as well as market and demographic studies that we use to supplement personal information provided directly by you. As with all other information, we use this data only for purposes consistent with this policy.',
    },
  ],

  [
    {
      type: POLICY_ITEMS_TYPES.TITLE,
      text: 'WHAT IS NON-PERSONAL INFORMATION AND WHEN DOES PARAM GAMES COLLECT IT?',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'Non-personal information, alone, cannot be used to identify or contact you. PARAM GAMES collects non-personal information about your use of our Games, Apps and Services.',
    },
    {
      type: POLICY_ITEMS_TYPES.SUBTITLE,
      text: 'A. What types of non-personal information does PARAM GAMES Collect?',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'When you use PARAM GAMES Games, Apps and Services, we may collect certain non-personal demographic information including gender, zip code, information about your computer, hardware, software, platform, media or mobile device. We also collect other non-personal information such as feature usage, game play behaviors. scores, user rankings as well as other data that you may provide in surveys, via your account preferences and online profiles or through purchases, for instance. We may also receive either non-personal or public information from third parties in connection with market and demographic studies that we use to supplement personal information provided directly by you.',
    },
    {
      type: POLICY_ITEMS_TYPES.SUBTITLE,
      text: 'B. How does PARAM GAMES collect non-personal information?',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'PARAM GAMES collects non-personal information in addition to personal',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'information when you use our Games, Apps and Services. In addition, we might use cookies and other technologies to passively collect non-personal demographic information, personalize your experience on our sites.',
    },
  ],

  [
    {
      type: POLICY_ITEMS_TYPES.TITLE,
      text: 'Cookies',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'Cookies are small files applied to your Internet browser to track movements within websites. We may link cookie information to personal information. Cookies link to information regarding what items you have viewed. Also, we may use cookies to deliver content specific to your interest and to monitor website or game usage. Most browsers are automatically set to accept cookies whenever you visit a website. You can disable cookies or set your browser to alert you when cookies are being sent. Please note that this privacy policy covers the use of cookies by PARAM GAMES only and does not cover the use of cookies by any advertisers.',
    },
  ],

  [
    {
      type: POLICY_ITEMS_TYPES.TITLE,
      text: 'Analytic metrics tools and other technologies',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'PARAM GAMES may also use its own proprietary analytic metrics tool and other analytics technologies to collect non-personal information when you use our online products and services.',
    },
  ],

  [
    {
      type: POLICY_ITEMS_TYPES.TITLE,
      text: 'WHAT HAPPENS TO THE INFORMATION PARAM GAMES COLLECTS?',
    },
    {
      type: POLICY_ITEMS_TYPES.SUBTITLE,
      text: 'A. How PARAM GAMES uses your information',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'PARAM GAMES uses your information to operate PARAM GAMES’ Games, Apps and Services, fulfill your specific requests, and to send you profile and account-related information. In addition, if you choose to receive communications from us about PARAM GAMES products and news, the personal information you provide will allow us to send you messages about things including new features, enhancements, contests and events of interest. You may also later opt out of this service from PARAM GAMES.',
    },
    {
      type: POLICY_ITEMS_TYPES.SUBTITLE,
      text: 'B. Will PARAM GAMES share my information with third parties?',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'PARAM GAMES will never share your personal information with third parties without your consent. We may, however, share non-personal data in the aggregate (in a form that does not personally identify you) with third parties. You may also opt in to allow PARAM GAMES to share your personal information with companies and organizations that provide products or services that we believe may be of interest to you.',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'From time to time, PARAM GAMES may employ third party contractors to collect personal information on our behalf to provide email delivery, product, or promotional fulfillment, contest administration, credit card processing, shipping or other services on our sites. When requesting these services, you may be asked to supply your name, mailing address, telephone number and email address to our contractors. We ask some third party contractors, such as credit agencies or market research firms, to supplement personal information that you provide to us for our own marketing and demographic studies, so that we can consistently improve our sites and to better meet our visitors’ needs and preferences.',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'When our third party contractors collect and/or have access to the personal information you provide to PARAM GAMES, PARAM GAMES requires that they adhere to our stated privacy policies and protect the confidentiality of personal information they collect or have access to in the course of their engagement by PARAM GAMES. These third parties are prohibited from using your personal information for any other purpose without your specific consent.',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'We may also disclose personal information to law enforcement, or the appropriate civil authorities to enforce legal rights and comply with the law, or to comply with an order from a government entity or other competent authority, or when we have reason to believe that a disclosure is necessary to address potential or actual injury or interference with our rights, property, operations, users or others who may be harmed or may suffer loss or damage, or when we believe that disclosure is necessary to protect our rights, combat fraud and/or comply with a judicial proceeding, court order, or legal process served on PARAM GAMES.',
    },
  ],

  [
    {
      type: POLICY_ITEMS_TYPES.TITLE,
      text: 'WHERE IS THE INFORMATION HELD?',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'PARAM GAMES utilizes data storage facilities located in the United States.',
    },
  ],

  [
    {
      type: POLICY_ITEMS_TYPES.TITLE,
      text: 'HOW DOES PARAM GAMES PROTECT YOUR PERSONAL INFORMATION?',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'The security of your personal information is important to us. We follow generally accepted industry standards, including the guidelines developed by the Online Privacy Alliance and the US Federal Trade Commission to protect the personal information submitted to us, both during transmission and in storage. No method of transmission over the Internet, or method of electronic storage, is 100% secure, however. Therefore, while we strive to use commercially reasonable means to protect your personal information, we cannot guarantee its absolute security. If you have any questions about security on our website, please contact us at privacy@paramlabs.io.',
    },
  ],

  [
    {
      type: POLICY_ITEMS_TYPES.TITLE,
      text: 'REVIEW, CORRECTION OF YOUR INFORMATION, REQUESTING REMOVAL FROM MAILING LISTS AND DEACTIVATING AN ACCOUNT',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'You have the right to ask us not to process your personal data for marketing purposes. We will usually inform you (before collecting your data) if we intend to use your data for such purposes or if we intend to disclose your information to any third party for such purposes and we will collect express consent from you if legally required prior to using your personal data for marketing purposes.',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'You can correct, update or delete your account information at any time, depending on the Game, App or Service by logging on our site, navigating to the Games and Apps account settings or by contacting ',
      childrenItems: [
        {
          type: POLICY_ITEMS_TYPES.LINK,
          text: 'support@paramlabs.io',
          href: 'mailto:support@paramlabs.io',
        },
        {
          type: POLICY_ITEMS_TYPES.TEXT,
          text: '. We will be happy to review, update or remove information as appropriate. We may still retain your information in our files however, to resolve disputes, enforce our user agreement, and due to technical and legal requirements and constraints related to the security, integrity and operation of Games, Apps and Services.',
        },
      ],
    },
  ],

  [
    {
      type: POLICY_ITEMS_TYPES.TITLE,
      text: 'PUBLIC INFORMATION INCLUDING USER GENERATED CONTENT, ONLINE FORUMS, BLOGS AND PROFILES',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'You may choose to disclose information about yourself in the course of contributing content to PARAM GAMES sites or in public online chat rooms, blogs, message boards, user “profiles” for public view or in similar forums on our sites. Information that you disclose in any of these forums is public information, and there is no expectation of privacy or confidentiality there. You should be aware that any personally identifiable information you submit in the course of these public activities can be read, collected, or used by other users of these forums, and could be used to send you unsolicited messages. We are not responsible for the personally identifiable information you choose to submit in these forums.',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'If you post a video, image or photo on one of our sites for public view you should be aware that these may be viewed, collected, copied and/or used by other users without your consent. We are not responsible for the videos, images or photos that you choose to submit to PARAM GAMES’ site.',
    },
  ],

  [
    {
      type: POLICY_ITEMS_TYPES.TITLE,
      text: 'YOUR CONSENT IS IMPORTANT TO US',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'It is important to us that where we collect, use or disclose your personal information we have your consent to do so. Depending on the sensitivity of the personal information, your consent may be implied, deemed (using an opt-out mechanism) or express. Express consent can be given orally, electronically or in writing. Implied consent is consent that can reasonably be inferred from your action or inaction.',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'You may change or withdraw your consent at any time, subject to legal or contractual restrictions and reasonable notice, by contacting us at ',
      childrenItems: [
        {
          type: POLICY_ITEMS_TYPES.LINK,
          text: 'privacy@paramlabs.io',
          href: 'mailto:privacy@paramlabs.io',
        },
        {
          type: POLICY_ITEMS_TYPES.TEXT,
          text: '. In some circumstances, a change in or withdrawal of consent may severely limit our ability to provide services to, or acquire products or services from, you. All communications with respect to such withdrawal or variation of consent should be in writing and addressed to your consultant or our Officer.',
        },
      ],
    },
  ],

  [
    {
      type: POLICY_ITEMS_TYPES.TITLE,
      text: 'CONTACT INFORMATION',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'If you have questions or concerns regarding this statement, you should contact the PARAM GAMES Privacy Policy Administrator at ',
      childrenItems: [
        {
          type: POLICY_ITEMS_TYPES.LINK,
          text: 'privacy@paramlabs.io',
          href: 'mailto:privacy@paramlabs.io',
        },
        {
          type: POLICY_ITEMS_TYPES.TEXT,
          text: '.',
        },
      ],
    },
  ],

  [
    {
      type: POLICY_ITEMS_TYPES.TITLE,
      text: 'Thank you for reviewing our privacy policy!',
    },
  ],
];

export const TERMS_OF_SERVICE_ITEMS = [
  [
    {
      type: POLICY_ITEMS_TYPES.TITLE,
      text: 'INTRODUCTION',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'PLEASE READ THESE TERMS OF USE AGREEMENT (“TERMS OF SERVICE” OR “AGREEMENT“) CAREFULLY. BY PARTICIPATING IN THE GAME, YOU AGREE THAT THIS AGREEMENT IS ENFORCEABLE LIKE ANY WRITTEN CONTRACT SIGNED BY YOU. IF YOU DO NOT AGREE TO ALL OF THE TERMS OF THE AGREEMENT DO NOT PARTICIPATE IN THE GAME.',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'You are responsible for any Internet connection fees that you incur when accessing the Service.',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'You are responsible for any Internet connection fees that you incur when accessing the Service.',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'These Terms of Use together with Param Games’ Privacy Policy, as any of the foregoing may be amended from time to time, together with any posted rules or instructions regarding a particular activity, poll, or other offering (all such terms hereafter collectively “Overall Terms”), govern your use of the Website, your participation in the apps and the games (the “Games”) and any other product, online service or web site (individually and collectively “PARAM GAMES SERVICES”) offered by PARAM LABS, INC., or any of its subsidiaries and affiliates (collectively, “PARAM GAMES”). You agree to check the Website periodically for new information and terms that govern your use of PARAM GAMES SERVICES.',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'Any modification to the Overall Terms shall be effective upon posting on the Services. You will be deemed to have agreed to any such modifications by your further use of the Services after any such modification is posted. It is therefore important that you review this Agreement regularly to ensure you are updated as to any changes. If you do not agree with the modifications, please discontinue use of the Services immediately.',
    },
  ],

  [
    {
      type: POLICY_ITEMS_TYPES.TITLE,
      text: 'PRIVACY & DATA COLLECTION',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'Your privacy is important to us. Please read PARAM GAMES’ Privacy Policy carefully for information relating to PARAM GAMES’ collection and use of personal information. You can find PARAM GAMES’ Privacy Policy at ',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'PARAM GAMES DOES NOT KNOWINGLY COLLECT INFORMATION FROM CHILDREN UNDER 13. IF YOU ARE UNDER 13, PLEASE DO NOT SUBMIT ANY PERSONALLY IDENTIFIABLE INFORMATION TO PARAM GAMES.',
      childrenItems: [
        {
          type: POLICY_ITEMS_TYPES.LINK,
          text: 'www.paramlabs.io/privacy-policy',
          href: 'https://www.paramlabs.io/privacy-policy',
        },
      ],
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'You understand, acknowledge and agree that public communications on PARAM GAMES SERVICES, including ',
      childrenItems: [
        {
          type: POLICY_ITEMS_TYPES.LINK,
          text: 'www.paramlabs.io',
          href: 'https://www.paramlabs.io/',
        },
        {
          type: POLICY_ITEMS_TYPES.TEXT,
          text: ' are not private or confidential, and may be viewed and used by others accessing the PARAM GAMES SERVICES.',
        },
      ],
    },
  ],

  [
    {
      type: POLICY_ITEMS_TYPES.TITLE,
      text: 'ACCOUNT',
    },
    {
      type: POLICY_ITEMS_TYPES.SUBTITLE,
      text: 'A. How PARAM GAMES uses your information',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'While some PARAM GAMES SERVICES may be generally accessed by the public, the use of certain PARAM GAMES SERVICES requires you to create an account (the “Account”). If you have questions about registration for an Account, please contact us at ',
      childrenItems: [
        {
          type: POLICY_ITEMS_TYPES.LINK,
          text: 'support@paramlabs.io',
          href: 'mailto:support@paramlabs.io',
        },
      ],
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'Only “natural persons,” as opposed to any kinds of legal entities (e.g., corporations, limited liability companies, and/or partnerships), shall have the right of establishing an Account. By entering into this Agreement and creating an Account, you represent that you are an adult and have the legal capacity to enter into a contract in the jurisdiction where you reside. You agree to comply with this Agreement on behalf of yourself and, at your discretion, any minor children for whom you are the parent or legal guardian and whom you have authorized to play the Game using your Account. You further agree that you are entirely liable for all activities conducted through your Account, and are responsible for ensuring that you and/or your child is aware of, understands, and complies with the terms of this Agreement and any and all other Overall Terms.',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'Some PARAM GAMES SERVICES may require the creation of a “user name” or a “persona.” Usernames and personas are tied to your Account. You may not use a username or persona that is used by someone else, is vulgar or offensive, or otherwise violates the Terms of Use. PARAM GAMES reserves the right to block or remove any “user name” or “persona”, if the use thereof violates any Overall Terms, laws or regulations, including, without limitation, personality rights, or trademarks.',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'You are solely responsible for all activity related to the use including purchases, whether or not authorized by you. Your Account may be terminated if someone else uses it to engage in activity that violates the Terms of Use or is otherwise improper or illegal. You should not reveal your Account password to others. PARAM GAMES will not ask you to reveal your password, or initiate contact with you asking for answers to your password security questions.',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'We have implemented physical, electronic and managerial procedures in order to help safeguard and prevent unauthorized access, use, alteration, modification and/or disclosure of your personal information. Although we use reasonable efforts to safeguard the security of your personal information, transmissions made on or through the Internet and personal information stored on our servers or the servers of third parties that we use are vulnerable to attack and cannot be guaranteed to be secure. In the event you become aware of or reasonably suspect any breach of security, including without limitation any loss, theft, or unauthorized disclosure of the Login Information, you must immediately notify PARAM GAMES by emailing ',
      childrenItems: [
        {
          type: POLICY_ITEMS_TYPES.LINK,
          text: 'support@paramlabs.io',
          href: 'mailto:support@paramlabs.io',
        },
        {
          type: POLICY_ITEMS_TYPES.TEXT,
          text: '.',
        },
      ],
    },
    {
      type: POLICY_ITEMS_TYPES.SUBTITLE,
      text: 'B. CONSENT TO MONITOR',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'When you play the Game, or participate in any other PARAM GAMES SERVICE, including the communication features on the Website, your IP address (the Internet protocol address from which you access any of the above) may be stored in our records. When the Game, or any element or module thereof, is updated or “patched,” our patch routine may check your computer to see that you have the most recent version of game-specific files; when you communicate within the Game or any communication feature in the Game (e.g. live chat, instant message services and the like), even “privately” to another person, you do so with the understanding that those communications go through our servers, can be monitored by us. Accordingly, you have no expectation of privacy in any of those communications and, accordingly, you expressly consent to monitoring of communications that you send and receive. You may view the PARAM GAMES Privacy Policy at ',
      childrenItems: [
        {
          type: POLICY_ITEMS_TYPES.LINK,
          text: 'www.paramlabs.io/privacy-policy',
          href: 'https://www.paramlabs.io/privacy-policy',
        },
      ],
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'You agree that we may communicate with you via telephone, email and any similar technology for any purpose relating to the Game, and any PARAM GAMES SERVICE or PARAM GAMES Software which may in the future be provided by us or on our behalf. You expressly permit PARAM GAMES to upload hardware and configuration information from your device to analyze and optimize your Game experience, improve and maintain the Game and/or provide you with customer service. In the event that the Game detects an unauthorized third party program, (a) the Game may communicate information back to us, including without limitation your Account username, details about the unauthorized third party program detected and the activities or functions performed thereby, and/or (b) we may exercise any or all of its rights and remedies under the Overall Terms without prior notice to the user(s) linked to such unauthorized third party program.',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'You agree that we may communicate with you via telephone, email and any similar technology for any purpose relating to the Game, and any PARAM GAMES SERVICE or PARAM GAMES Software which may in the future be provided by us or on our behalf. You expressly permit PARAM GAMES to upload hardware and configuration information from your device to analyze and optimize your Game experience, improve and maintain the Game and/or provide you with customer service. In the event that the Game detects an unauthorized third party program, (a) the Game may communicate information back to us, including without limitation your Account username, details about the unauthorized third party program detected and the activities or functions performed thereby, and/or (b) we may exercise any or all of its rights and remedies under the Overall Terms without prior notice to the user(s) linked to such unauthorized third party program.',
    },
    {
      type: POLICY_ITEMS_TYPES.SUBTITLE,
      text: 'C. Termination of PARAM GAMES',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'Account & Services by PARAM GAMES PARAM GAMES may suspend, modify or terminate your Account(s) and access to all related entitlements and PARAM GAMES SERVICES for violation of these Terms of Use, or any other Overall Terms, illegal or improper use of your Account, or illegal or improper use of PARAM GAMES SERVICES, products, or PARAM GAMES’ Intellectual Property. You will lose your usernames and personas as a result of the Account termination. If you have more than one Account, PARAM GAMES may terminate all of your Accounts and all related entitlements. PARAM GAMES may issue you a warning, suspend your Account or PARAM GAMES may immediately terminate any and all Accounts that you have established. You acknowledge that in such an instance PARAM GAMES is not required to provide you notice before suspending or terminating your Account(s), temporarily or permanently banning your device from some or all PARAM GAMES SERVICES or selectively removing, revoking or garnishing Virtual Goods associated with your Account. If PARAM GAMES terminates your Account, you may not participate in a PARAM GAMES SERVICE again without PARAM GAMES’ express permission. To participate in a PARAM GAMES SERVICE after such termination, contact us at support@paramlabs.io. PARAM GAMES reserves the right to refuse to keep Accounts for, and provide PARAM GAMES SERVICES to, any individual. You may not allow individuals whose Accounts have been terminated by PARAM GAMES to use your Account.',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'In addition, PARAM GAMES reserves the right to terminate any PARAM GAMES SERVICE at any time by giving you notice of such termination within the time period specified when you joined the particular PARAM GAMES SERVICE, or if no time period for notice of termination was specified, then within ten (10) days of the date such notice is posted on the applicable PARAM GAMES SERVICE.',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'If your Account is terminated for a violation of these Terms of Use, the EULA or any other Overall Terms, no refund will be granted; no online time or other credits will be credited to you or converted to cash, nor will any other form of reimbursement be issued, and you will have no further access to your Account or entitlements associated with your Account or the particular PARAM GAMES SERVICE (such as digital assets, game credits, passes, and tokens).',
    },
    {
      type: POLICY_ITEMS_TYPES.SUBTITLE,
      text: 'D. Cancellation of a PARAM GAMES',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'Account by you You may cancel your Account at any time by contacting ',
      childrenItems: [
        {
          type: POLICY_ITEMS_TYPES.LINK,
          text: 'support@paramlabs.io',
          href: 'mailto:support@paramlabs.io',
        },
        {
          type: POLICY_ITEMS_TYPES.TEXT,
          text: '. If you do not agree to the terms in this Terms of Use or any other Overall Terms, your sole remedy is to not use PARAM GAMES SERVICES and to cancel your Account or applicable subscriptions. You understand and agree that the cancellation of your Account is your sole right and remedy with respect to any dispute with PARAM GAMES, including any dispute related to, or arising out of:',
        },
      ],
    },
    {
      type: POLICY_ITEMS_TYPES.UL,
      items: [
        {
          type: POLICY_ITEMS_TYPES.TEXT,
          text: 'any term of this Terms of Use, the EULA, or any other Overall Terms, or PARAM GAMES’ enforcement or application thereof;',
        },
        {
          type: POLICY_ITEMS_TYPES.TEXT,
          text: 'the content available through PARAM GAMES SERVICES or any change in content provided through PARAM GAMES SERVICES;',
        },
        {
          type: POLICY_ITEMS_TYPES.TEXT,
          text: 'your ability to access and/or use PARAM GAMES SERVICES; or',
        },
        {
          type: POLICY_ITEMS_TYPES.TEXT,
          text: 'the amount or type of any payment, fees, surcharges, applicable taxes, billing methods, or any change to the fees, applicable taxes, surcharges or billing methods for PARAM GAMES SERVICES.',
        },
      ],
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'PARAM GAMES reserves the right to collect fees, surcharges or costs incurred before you cancel your Account or a subscription to a PARAM GAMES SERVICE. You are also responsible for any amounts owed to third-party vendors or content providers before your cancellation. Any delinquent or unpaid fees and other unresolved issues with PARAM GAMES SERVICES must be settled before you establish a new PARAM GAMES Account.After you canceled your Account, or termination of your Account pursuant to these Terms of Use, PARAM GAMES has the right to delete all your account information and content.',
    },
  ],

  [
    {
      type: POLICY_ITEMS_TYPES.TITLE,
      text: 'CHARGES & BILLING',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'FEES ARE PAYABLE IN ADVANCE AND ARE NOT REFUNDABLE IN WHOLE OR IN PART.',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'Some PARAM GAMES SERVICES require payment of a fee. You must have an Account and pay the subscription or other fees to participate in these Services. PARAM GAMES reserves the right to change its prices, fees, or billing methods at any time.',
    },
    {
      type: POLICY_ITEMS_TYPES.SUBTITLE,
      text: 'A. Payment Options and Information',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'You may make payment using the methods available for the particular PARAM GAMES SERVICE and you agree to the terms and conditions applicable to each payment method you choose. Payment methods may vary by PARAM GAMES SERVICE. When you provide credit card or other payment information to PARAM GAMES, you represent to PARAM GAMES that you are the authorized user of the credit card or other payment method.',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'You must provide current, complete, and accurate information for your billing account. PARAM GAMES does not receive any confidential payment data from its payment providers, and PARAM GAMES is not responsible for their performance. You must promptly update all information with the payment provider to keep your billing account current, complete, and accurate (such as a change in billing address, credit card number, or credit card expiration date). Customers who use a payment method other than credit card may incur an additional payment processing fee. Any separate charges or obligations that you incur in your dealings with the third-party payment providers are your responsibility. PARAM GAMES reserves the right to change such payment providers at any time.',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'As the Account holder, you are responsible for all charges incurred, including applicable taxes, and all purchases made by you or anyone that uses your Account, including your family or friends. This means that, unless your Account or payment information is obtained unlawfully or fraudulently by someone other than those authorized by you to use your Account, you will be responsible for all usage and purchases on your Account.',
    },
    {
      type: POLICY_ITEMS_TYPES.SUBTITLE,
      text: 'B. Virtual Goods',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'You agree that PARAM GAMES reserves the right to manage, regulate, control, modify and/or eliminate game elements, including but not limited to characters, accessories, items such as “character customization”, points, and credits (collectively, “Virtual Goods”) therein. All Virtual Goods remain the property of PARAM GAMES. You acknowledge that PARAM GAMES may, in its sole discretion, in any general or specific case, modify features, functions or abilities of any element of its games or any Virtual Goods (which may, among other things, make the Virtual Goods substantially more valuable, effective or functional, or less valuable, effective or functional, more common or less common, or eliminated entirely). You acknowledge and agree that all Virtual Goods represent a limited license right governed by the Overall Terms, and are not redeemable for any sum of money or monetary value from PARAM GAMES at any time.',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'YOU AGREE, THEREFORE, THAT YOU WILL NEVER ASSERT OR BRING ANY CLAIM OR SUIT AGAINST PARAM GAMES, ITS PARENT COMPANY, DIVISIONS, SUBSIDIARIES, AFFILIATES, OR ANY EMPLOYEES OF ANY OF ABOVE, WHICH IS RELATED TO OR BASED ON, INCLUDING BUT NOT LIMITED TO; (I) A CLAIM THAT YOU “OWN” ANY VIRTUAL GOODS IN THE GAME, (II) A CLAIM FOR THE “VALUE” OF VIRTUAL GOODS IF PARAM GAMES DELETES THEM (AND/OR TERMINATES YOUR ACCOUNT) WITH A REASONABLE CAUSE AT PARAM GAMES’ SOLE DISCRETION, (III) A CLAIM FOR THE“VALUE” OF VIRTUAL GOODS THAT YOU MAY LOSE IF PARAM GAMES DOES ANYTHING THAT IT IS ENTITLED TO DO PURSUANT TO ANY PROVISION OF THESE TERMS OF USE, THE EULA, PARAM GAMES’ PRIVACY POLICY, OR ANY OTHER OVERALL TERMS, AND/OR, OR FOR ANY MALFUNCTIONS AND/OR “BUGS” IN PARAM GAMES SERVICES, (IV) A CLAIM THAT THE“VALUE” OF ANY VIRTUAL GOODS HAS INCREASED OR DECREASED BY VIRTUE OF ANY GAME MODIFICATION THAT PARAM GAMES HAS MADE OR WILL MAKE.',
    },
  ],

  [
    {
      type: POLICY_ITEMS_TYPES.TITLE,
      text: 'INTELLECTUAL PROPERTY',
    },
    {
      type: POLICY_ITEMS_TYPES.SUBTITLE,
      text: 'A. Content',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: '“Content” as used herein includes (1) software, software updates or patches, or other utilities and tools from PARAM GAMES or its licensors (“PARAM GAMES Software”) and (2) other software, technology, text and audio visual material, the design and appearance of the game. The foregoing includes, without limitation, computer code, titles, objects, artifacts, characters, character names, locations, location names, stories, story lines, dialogue, catch phrases, artwork, graphics, structural or landscape designs, animations, sounds, musical compositions and recordings, audio-visual effects, character likenesses, user Accounts, and methods of operation.',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'PARAM GAMES reserves the right to remove any Content that is objectionable to us for any reason. The decision to remove Content is in PARAM GAMES’ sole and final discretion. To the maximum extent permitted by applicable law, PARAM GAMES does not assume any responsibility or liability for User Content, or for any failure to or delay in removing such Content.',
    },
    {
      type: POLICY_ITEMS_TYPES.SUBTITLE,
      text: 'B. PARAM GAMES Ownership',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'Content in PARAM GAMES SERVICES is owned by PARAM GAMES or PARAM GAMES’ third-party licensors and is protected by International copyright, trade dress, patent, and trademark laws, international conventions, and other laws protecting intellectual property and related proprietary rights. You may not copy or download any Content from an PARAM GAMES SERVICE unless our terms expressly authorize you to do so. You agree not to remove, obscure, or alter copyright, patent, trademark, or other proprietary rights notices affixed to Content. You may not sell, license, distribute, copy, modify, publicly perform or display, transmit, publish, edit, adapt, create derivative works from, or otherwise make unauthorized use of Content. PARAM GAMES reserves all rights in PARAM GAMES owned and licensed Content that are not expressly granted to you in Overall Terms. You acknowledge that PARAM GAMES and/or third-party content providers remain the owners of all materials posted on the Website and in the Game, and that you do not acquire any of those ownership rights by downloading copyrighted materials. Making unauthorized copies of Content found on PARAM GAMES SERVICES may result in the termination of your Account(s), prohibition on use of PARAM GAMES SERVICES, and further legal action. Content owners may take criminal or civil action against you for unauthorized use of intellectual property. You agree to indemnify and hold harmless PARAM GAMES from any unauthorized or illegal conduct by you, or through the use of your Account, on PARAM GAMES SERVICES.',
    },
    {
      type: POLICY_ITEMS_TYPES.SUBTITLE,
      text: 'C. Limited Use License',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'The PARAM GAMES SERVICES, and all respective Content are available for use only by authorized end users in accordance with, and subject to the terms and conditions set forth in these Terms of Use and any applicable EULA. PARAM GAMES hereby grants to you a limited, personal, nonexclusive, non transferable, non-assignable and fully revocable license to use the Website, the Game, and any Content thereof for your individual, non¬commercial, entertainment purposes only. The foregoing license is strictly subject to the following:',
    },
    {
      type: POLICY_ITEMS_TYPES.UL,
      items: [
        {
          type: POLICY_ITEMS_TYPES.TEXT,
          text: 'you are current with your payment of all applicable fees for the use of the Game and PARAM GAMES SERVICES and',
        },
        {
          type: POLICY_ITEMS_TYPES.TEXT,
          text: 'you comply with these Terms of Use, the EULA and the PARAM GAMES Privacy Policy and you are not otherwise in breach of any Overall Terms. This grant of license shall be automatically revoked as of the moment that any of these conditions are no longer met by you.',
        },
      ],
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'PARAM GAMES SERVICES may require or allow you to download PARAM GAMES Software. In such cases, PARAM GAMES grants to you a non-exclusive, limited license to use PARAM GAMES Software solely for the purpose stated by PARAM GAMES at the time the PARAM GAMES Software is made available to you. If an End User License Agreement or similar agreement is provided with the PARAM GAMES Software, your use of the PARAM GAMES Software is subject to the terms of that license agreement in addition to these Terms of Use. You may not sub-license, or charge others to use or access PARAM GAMES Software. You may not translate, reverse-engineer, reverse-compile or decompile, disassemble or make derivative works from PARAM GAMES Software. You may not modify PARAM GAMES Software or use it in any way not expressly authorized in writing by PARAM GAMES. You understand that PARAM GAMES’ introduction of various technologies may not be consistent across all platforms and that the performance of PARAM GAMES Software and related PARAM GAMES SERVICES may vary depending on your computer and other equipment. From time to time, PARAM GAMES may provide you with updates or modifications to PARAM GAMES Software. You understand that certain updates and modifications may be required in order to continue the use of PARAM GAMES Software and PARAM GAMES SERVICES.',
    },
  ],

  [
    {
      type: POLICY_ITEMS_TYPES.TITLE,
      text: 'DISCLAIMERS & INDEMNIFICATION',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'This Section shall survive termination of this Terms of Use agreement.',
    },
    {
      type: POLICY_ITEMS_TYPES.SUBTITLE,
      text: 'A. Limitations on Warranty & Liability',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, YOU EXPRESSLY AGREE THAT THE USE OF THE GAME, THE WEBSITE, OR ANY OTHER PARAM GAMES SERVICES, PARAM GAMES SOFTWARE, AND THE INTERNET IS AT YOUR SOLE RISK. PARAM GAMES SERVICES, PARAM GAMES SOFTWARE, PARAM GAMES’ PRODUCTS AND THIRD-PARTY SERVICES AND PRODUCTS ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS FOR YOUR USE, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, UNLESS SUCH WARRANTIES MAY NOT BE EXCLUDED BY LAW. PARAM GAMES PROVIDES PARAM GAMES SERVICES ON A COMMERCIALLY REASONABLE BASIS AND DOES NOT WARRANT MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE OR THAT YOU WILL BE ABLE TO ACCESS OR USE PARAM GAMES SERVICES AT TIMES OR LOCATIONS OF YOUR CHOOSING, OR THAT PARAM GAMES WILL HAVE ADEQUATE CAPACITY FOR PARAM GAMES SERVICES AS A WHOLE OR IN ANY SPECIFIC GEOGRAPHIC AREA OR THAT THE PARAM GAMES SERVICES WILL BE ERROR-FREE, OR THAT DEFECTS WILL BE CORRECTED, OR THAT THE PARAM GAMES SERVICES ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. USE OF THE WEBSITE, INCLUDING, WITHOUT LIMITATION, ALL COMMUNICATION FEATURES OF THE WEBSITE, IS AT YOUR SOLE RISK TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, YOU ACKNOWLEDGE AND AGREE THAT YOUR SOLE AND EXCLUSIVE REMEDY FOR ANY DISPUTE WITH PARAM GAMES OR ITS LICENSORS IS TO STOP USING PARAM GAMES SERVICES, AND TO CANCEL YOUR PARAM GAMES ACCOUNT. YOU ACKNOWLEDGE AND AGREE THAT PARAM GAMES, ITS LICENSORS AND AFFILIATES ARE NOT LIABLE FOR ANY ACT OR FAILURE TO ACT BY THEM OR ANY OTHER PERSON REGARDING CONDUCT, COMMUNICATION OR CONTENT ON ANY PARAM GAMES SERVICES OR USE OF PARAM GAMES SOFTWARE. IN NO CASE SHALL PARAM GAMES OR ITS LICENSORS, AFFILIATES’, EMPLOYEES’, OFFICERS’, OR DIRECTORS’ (COLLECTIVELY, “PARAM GAMES AFFILIATES“) LIABILITY TO YOU EXCEED THE AMOUNT THAT YOU PAID TO PARAM GAMES FOR PARAM GAMES SERVICES. IN NO CASE SHALL PARAM GAMES OR PARAM GAMES AFFILIATES BE LIABLE FOR DIRECT, GENERAL, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES, INCLUDING LOSS OF PROFIT OR REVENUES, ARISING FROM YOUR USE OF PARAM GAMES SERVICES, PARAM GAMES SOFTWARE, THE INTERNET OR FOR ANY OTHER CLAIM RELATED IN ANY WAY TO YOUR USE OF PARAM GAMES SERVICES OR ACCOUNTS. BECAUSE SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR THE LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, IN SUCH JURISDICTIONS, PARAM GAMES’ AND PARAM GAMES AFFILIATES’ LIABILITY SHALL BE LIMITED TO THE FULLEST EXTENT PERMITTED BY LAW. PARAM GAMES DOES NOT ENDORSE, WARRANT OR GUARANTEE ANY THIRD-PARTY PRODUCT OR SERVICE OFFERED THROUGH PARAM GAMES AND WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.',
    },
    {
      type: POLICY_ITEMS_TYPES.SUBTITLE,
      text: 'B. Indemnification',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'Upon PARAM GAMES’ request, you agree to defend, indemnify and hold harmless PARAM GAMES and its affiliates, employees, contractors, officers, directors, vendors, and content providers from all liabilities, claims and expenses, including attorneys’ fees, that arise from a breach of these Terms of Use, or any other Overall Terms, for which you are responsible or in connection with your distribution of any Content on or through PARAM GAMES SERVICES. Without limiting the generality of the foregoing, you agree to indemnify and hold PARAM GAMES harmless for any improper or illegal use of your Account, including the illegal or improper use of your Account by someone to whom you have given permission to use your Account. You agree that you will be personally responsible for your use of PARAM GAMES SERVICES and for all of your communication and activity on PARAM GAMES SERVICES, including any User Content you contribute, and that you will indemnify and hold harmless PARAM GAMES, its affiliates, employees, officers, and directors from any liability or damages arising from your conduct on PARAM GAMES SERVICES, including any User Content that you contribute.',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'PARAM GAMES reserves the right, at its own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you. In that event, you shall have no further obligation to provide indemnification to PARAM GAMES in that matter.',
    },
    {
      type: POLICY_ITEMS_TYPES.SUBTITLE,
      text: 'C. Updates: Possible Setbacks and Loss of Data',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'IMPORTANT: PARAM GAMES MAY FIND IT NECESSARY TO MAKE UPDATES OR RESET CERTAIN PARAMETERS TO BALANCE GAME PLAY AND USAGE OF PARAM GAMES SERVICES. THESE UPDATES OR “RESETS” MAY CAUSE YOU SETBACKS WITHIN THE RELEVANT GAME AND MAY AFFECT CHARACTERS, GAMES, GROUPS OR OTHER ENTITLEMENTS UNDER YOUR CONTROL. PARAM GAMES RESERVES THE RIGHT TO MAKE THESE UPDATES AND IS NOT LIABLE TO YOU FOR THESE CHANGES.',
    },
  ],

  [
    {
      type: POLICY_ITEMS_TYPES.TITLE,
      text: 'DISPUTE RESOLUTION',
    },
    {
      type: POLICY_ITEMS_TYPES.SUBTITLE,
      text: 'A. Equitable Remedies',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'You hereby acknowledge and agree that PARAM GAMES would suffer irreparable harm if these Terms of Use or any of the Overall Terms were not specifically enforced. Consequently, in addition to such monetary and other relief as may be recoverable at law, you agree that PARAM GAMES shall be entitled to specific performance or other injunctive relief, without bond, other security, or proof of damages, as remedy for any breach or threatened breach of these Terms of Use or any other Overall Terms. Additionally, in the event any legal or administrative action or proceeding is brought by either party in connection with this Terms of Use or the Overall Terms and consistent with the terms of this Section, the prevailing party in such action or proceeding shall be entitled to recover from the other party all the costs, attorneys’ fees and other expenses incurred by such prevailing party as the result of the action or proceeding.',
    },
    {
      type: POLICY_ITEMS_TYPES.SUBTITLE,
      text: 'B. Informal Negotiations',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'To expedite resolution and control the cost of any dispute, controversy or claim related to the Terms of Use or any other Overall Terms (“Dispute”), you and PARAM GAMES agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least 30 days before initiating any arbitration or court proceeding. Such informal negotiations commence upon written notice from one person to the other. PARAM GAMES will send its notice to your billing address (if provided) and email you a copy to the email address you have provided to us. You agree to send your notice to Param Labs, Inc., c/o John Moran, 11700 W. Charleston Blvd., Las Vegas, Nevada, USA, Attn: Legal Department with a copy via email to ',
      childrenItems: [
        {
          type: POLICY_ITEMS_TYPES.LINK,
          text: 'jt@paramlabs.io',
          href: 'mailto:jt@paramlabs.io',
        },
        {
          type: POLICY_ITEMS_TYPES.TEXT,
          text: '.',
        },
      ],
    },
    {
      type: POLICY_ITEMS_TYPES.SUBTITLE,
      text: 'C. Formal Dispute Resolution',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'If you and PARAM GAMES are unable to resolve a Dispute through informal negotiations, either you or PARAM GAMES may elect to have the Dispute finally and exclusively resolved by the French court.',
    },
  ],

  [
    {
      type: POLICY_ITEMS_TYPES.TITLE,
      text: 'TERMINATION',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'This Agreement (and all subsequent modifications, if any) shall remain effective until terminated. Both you and PARAM GAMES may terminate this Agreement at any time for any reason or for no reason. Termination by PARAM GAMES will be effective upon notice to you, termination or deletion of your Account, or its decision to permanently discontinue offering and/or supporting the Service, which it may do at any time in its sole discretion. You may terminate this Agreement (and consequently, your Account) at any time by notifying PARAM GAMES at ',
      childrenItems: [
        {
          type: POLICY_ITEMS_TYPES.LINK,
          text: 'support@paramlabs.io',
          href: 'mailto:support@paramlabs.io',
        },
        {
          type: POLICY_ITEMS_TYPES.TEXT,
          text: '. Upon termination of this Agreement, your right to use the PARAM GAMES SERVICES shall immediately cease. The following provisions shall survive any termination of this Agreement.',
        },
      ],
    },
  ],

  [
    {
      type: POLICY_ITEMS_TYPES.TITLE,
      text: 'GENERAL TERMS',
    },
    {
      type: POLICY_ITEMS_TYPES.SUBTITLE,
      text: 'A. Remedies',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'You agree that these Terms of Use are not intended to confer and do not confer any rights or remedies upon any person other than the parties to these Terms of Use. You also understand and agree that these Terms of Use, the PARAM GAMES Privacy Policy and any other Overall Terms, including PARAM GAMES enforcement thereof, are not intended to confer, and do not confer, any rights or remedies upon any person.',
    },
    {
      type: POLICY_ITEMS_TYPES.SUBTITLE,
      text: 'B. Severability',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'If any part of these Terms of Use or the Overall Terms is held invalid or unenforceable, that portion shall be interpreted in a manner consistent with applicable law to reflect, as nearly as possible, the original intentions of PARAM GAMES, and the remaining portions shall remain in full force and effect.',
    },
    {
      type: POLICY_ITEMS_TYPES.SUBTITLE,
      text: 'C. Assignment.',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'PARAM GAMES may assign these Terms of Use, in whole or in part, to any person or entity at any time with or without your consent. You may not assign these Terms of Use without PARAM GAMES’ prior written consent, and any unauthorized assignment by you shall be null and void.',
    },
    {
      type: POLICY_ITEMS_TYPES.SUBTITLE,
      text: 'D. Waiver',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'The failure of PARAM GAMES to exercise or enforce any right or provision of these Terms of Use or any Overall Terms shall in no way be construed to be a present or future waiver of such provision, nor in any way affect the right of any party to enforce each and every such provision thereafter. The express waiver by PARAM GAMES of any provision, condition or requirement of these Terms of Use or any Overall Terms shall not constitute a waiver of any future obligation to comply with such provision, condition or requirement.',
    },
    {
      type: POLICY_ITEMS_TYPES.SUBTITLE,
      text: 'E. Force Majeure.',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'PARAM GAMES shall not be liable for any delay or failure to perform resulting from causes outside the reasonable control of PARAM GAMES, including, without limitation, any failure to perform hereunder due to unforeseen circumstances or cause beyond PARAM GAMES’ control such as acts of god, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, strikes, or shortages of transportation facilities, fuel, energy, labor or materials.',
    },
    {
      type: POLICY_ITEMS_TYPES.SUBTITLE,
      text: 'F. Governing Law.',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'The Laws of the United States, govern these Terms of Use, any other Overall Terms, and you expressly agree that exclusive jurisdiction for any claim or dispute with PARAM GAMES or relating in any way to these Terms of Use, any other Overall Terms, your Account(s), or your use of any PARAM GAMES SERVICES resides in the United States Courts, and you further agree and expressly consent to the exercise of personal jurisdiction in the United States Courts in connection with any such dispute including any claim involving PARAM GAMES or its affiliates, employees, contractors, officers, directors, vendors and content providers. The application of the United Nations Convention on Contracts for the International Sale of Goods is expressly excluded.',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'Those who choose to access the Service from locations outside of the United States do so on their own initiative and are responsible for compliance with local laws if and to the extent local laws are applicable. Should a court of competent jurisdiction determine that other laws apply, these Terms of Use shall be enforced to the fullest extent permitted by the laws of the applicable jurisdiction and be interpreted to give maximum effect to the terms and conditions hereof.',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'You agree we cannot be held liable if laws applicable to you restrict or prohibit your participation. We make no representations or warranties, implicit or explicit, as to your legal right to participate in any Apps, contests, sweepstakes or tournaments offered through the Services nor shall any person affiliated, or claiming affiliation with the Services have authority to make any such representations or warranties.',
    },
    {
      type: POLICY_ITEMS_TYPES.SUBTITLE,
      text: 'G. Entire Agreement.',
    },
    {
      type: POLICY_ITEMS_TYPES.TEXT,
      text: 'These Terms of Use, together with the PARAM GAMES Privacy Policy, and any other Overall Terms, including any posted rules or instructions regarding a particular activity, poll, or contest constitute the entire agreement between you and PARAM GAMES relating to your rights and obligations in the use of PARAM GAMES SERVICES. If there is any conflict between these Terms of Use, the Privacy Policy, and any other Overall Terms, PARAM GAMES shall resolve the conflict in its sole discretion.',
    },
  ],
];
