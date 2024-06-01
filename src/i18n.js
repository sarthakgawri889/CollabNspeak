// i18n.js
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";


i18next
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next) // Passes i18next down to react-i18next
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          home: "HOME",
          services: "SERVICES",
          about: "ABOUT US",
          homepmessage : "Welcome to our language learning community, where you can collaborate and practice languages in a supportive and interactive environment!",
          newsession : "New Session",
          existingsession: "Existing Session",
          iceb: "Icebreaker",
          gd : "Group Discussion",
          debate: "Debate",
          profile: "Profile",
          details : "Details",
          editp: "Edit Profile",
          taket: "Take Test",
          username: "Username",
          gender : "Gender",
          save : "Save",
          logout : "Logout",
          welcome: "Welcome to CollabNSpeak!",
          servicesIntro: "At CollabNSpeak, we provide a comprehensive platform for language practice and skill development through engaging activities and interactive features. Explore our diverse range of services designed to enhance your language learning experience:",
          iceBreaking: "Ice-Breaking Sessions",
          iceBreakingintro: "Start your language journey by breaking the ice in a relaxed and supportive environment. Our structured ice-breaking sessions help you overcome language barriers and build confidence in speaking your target language.",
          debateClubs: "Debate Clubs",
          debateClubsintro: "Join lively debate clubs to hone your language skills while exploring diverse topics and viewpoints. Engage in stimulating discussions and learn to articulate your thoughts effectively in your chosen language.",
          groupDiscussions: "Group Discussions",
          groupDiscussionsintro: "Participate in dynamic group discussions facilitated by experienced moderators. Collaborate with fellow learners to exchange ideas, share experiences, and improve your language fluency through interactive conversations.",
          videoCallFeature: "Video Call Feature",
          videoCallFeatureintro: "Experience real-time communication with our integrated video call feature. Connect with other users worldwide and engage in immersive language practice sessions without leaving the comfort of your home. Practice speaking skills, receive instant feedback, and build meaningful connections with language enthusiasts around the globe.",
          communitySupport: "Community Support",
          communitySupportintro: "Join our vibrant community of language learners and educators committed to supporting each other's language goals. Share resources, exchange tips, and celebrate milestones together on our collaborative platform. Connect with like-minded individuals and embark on a rewarding language learning journey together",
          startyour: "Start your language learning adventure with CollabNSpeak today and discover a whole new world of opportunities to improve your language skills and connect with others!",
          abcns: "About CollabNSpeak",
          abcnsintro: "At CollabNSpeak, our mission is to break down language barriers and create a global community where language learners can practice, connect, and grow together. We believe in the power of collaboration and communication to enhance language learning and foster meaningful connections.",
          mission: "Our Mission",
          missintro: "Our mission is to provide a supportive and interactive platform where language learners can engage in practical language activities, build confidence, and improve their fluency. We are committed to creating an inclusive environment that encourages learners to embrace new languages and cultures.",
          values: "Our Values",
          v1 : "Collaboration: We believe that learning together is more effective and enjoyable.",
          v2: "Inclusivity: We welcome learners from all backgrounds and proficiency levels.",
          v3: "Innovation: We leverage technology to create engaging and effective learning experiences.",
          v4: "Support: We provide resources and guidance to help learners achieve their language goals.",
          v5: "Community: We foster a sense of belonging and mutual support among our members.",
          team: "Our Team",
          teamintro: "Our team is comprised of passionate language enthusiasts, educators, and technologists dedicated to making language learning accessible and enjoyable for everyone. We work tirelessly to develop and improve our platform, ensuring that it meets the needs of our diverse user base.",
          contact: "Contact Us",
          contactintro: "We love hearing from our users! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us at contact@collabnspeak.com. We're here to help and support you on your language learning journey.",
          join: "Join CollabNSpeak today and become part of a global community of language learners and enthusiasts. Together, we can achieve our language goals and create a more connected world.",
          start: "Start",
          end: "End"

        },
      },
      hi: {
        translation: {
          home: "होम",
          services: "सेवा",
          about: "हमारे बारे में",
          homepmessage : "हमारे भाषा सीखने वाले समुदाय में आपका स्वागत है, जहाँ आप एक सहयोगी और इंटरैक्टिव वातावरण में सहयोग और भाषाओं का अभ्यास कर सकते हैं!",
          newsession : "नया सत्र",
          existingsession: "मौजूदा सत्र",
          iceb: "आइसब्रेकर",
          gd : "सामूहिक चर्चा",
          debate: "बहस",
          profile: "प्रोफ़ाइल",
          details : "विवरण",
          editp: "प्रोफ़ाइल संपादित करें",
          taket: "परीक्षा लो",
          username: "यूज़रनेम",
          gender : "लिंग",
          save : "सेव",
          logout:"लॉग आउट",
          welcome: "CollabNSpeak में आपका स्वागत है!",
          servicesIntro: "CollabNSpeak में, हम भाषा अभ्यास और कौशल विकास के लिए संलग्न गतिविधियों और इंटरैक्टिव सुविधाओं के माध्यम से एक व्यापक मंच प्रदान करते हैं। अपनी भाषा सीखने के अनुभव को बढ़ाने के लिए डिज़ाइन की गई हमारी विविध सेवाओं की श्रृंखला का अन्वेषण करें:",
          iceBreaking: "आइस-ब्रेकिंग सेशन",
          iceBreakingintro: "एक आरामदायक और सहायक वातावरण में आइस तोड़कर अपनी भाषा यात्रा शुरू करें। हमारे संरचित आइस-ब्रेकिंग सत्र आपको भाषा बाधाओं को पार करने और अपनी लक्षित भाषा में बोलने में आत्मविश्वास बनाने में मदद करते हैं।",
          debateClubs: "बहस क्लब",
          debateClubsintro: "जीवंत बहस क्लबों में शामिल हों और अपनी भाषा कौशल को सुधारें जबकि विविध विषयों और दृष्टिकोणों का अन्वेषण करें। उत्तेजक चर्चाओं में शामिल हों और अपनी चुनी हुई भाषा में प्रभावी ढंग से अपने विचारों को व्यक्त करना सीखें।",
          groupDiscussions: "समूह चर्चा",
          groupDiscussionsintro: "अनुभवी मॉडरेटर द्वारा संचालित गतिशील समूह चर्चाओं में भाग लें। अन्य शिक्षार्थियों के साथ मिलकर विचारों का आदान-प्रदान करें, अनुभव साझा करें, और इंटरैक्टिव वार्तालापों के माध्यम से अपनी भाषा की फुर्तीला को सुधारें।",
          videoCallFeature: "वीडियो कॉल सुविधा",
          videoCallFeatureintro: "हमारी एकीकृत वीडियो कॉल सुविधा के साथ वास्तविक समय में संचार का अनुभव करें। अन्य उपयोगकर्ताओं के साथ दुनिया भर में जुड़ें और अपने घर की सुविधा को छोड़े बिना गहन भाषा अभ्यास सत्रों में संलग्न हों। बोलने के कौशल का अभ्यास करें, तुरंत प्रतिक्रिया प्राप्त करें, और दुनिया भर के भाषा उत्साही लोगों के साथ सार्थक संबंध बनाएं।",
          communitySupport: "समुदाय समर्थन",
          communitySupportintro: "हमारे जीवंत भाषा शिक्षार्थियों और शिक्षकों के समुदाय में शामिल हों जो एक-दूसरे की भाषा के लक्ष्यों का समर्थन करने के लिए प्रतिबद्ध हैं। संसाधनों को साझा करें, टिप्स का आदान-प्रदान करें, और हमारे सहयोगी मंच पर एक साथ मील के पत्थर मनाएं। समान विचारधारा वाले व्यक्तियों के साथ जुड़ें और एक साथ एक पुरस्कृत भाषा सीखने की यात्रा पर निकलें।",
          startyour: "CollabNSpeak के साथ आज ही अपनी भाषा सीखने की यात्रा शुरू करें और अपनी भाषा कौशल को सुधारने और दूसरों से जुड़ने के अवसरों की एक पूरी नई दुनिया की खोज करें!",
          abcns: "CollabNSpeak के बारे में",
          abcnsintro: "CollabNSpeak में, हमारा मिशन भाषा बाधाओं को तोड़ना और एक वैश्विक समुदाय बनाना है जहां भाषा शिक्षार्थी अभ्यास कर सकते हैं, जुड़ सकते हैं, और एक साथ बढ़ सकते हैं। हम सहयोग और संचार की शक्ति में विश्वास करते हैं ताकि भाषा सीखने को बढ़ाया जा सके और सार्थक संबंध बनाए जा सकें।",
          mission: "हमारा मिशन",
          missintro: "हमारा मिशन एक सहायक और इंटरैक्टिव मंच प्रदान करना है जहां भाषा शिक्षार्थी व्यावहारिक भाषा गतिविधियों में शामिल हो सकते हैं, आत्मविश्वास बना सकते हैं, और अपनी फुर्तीला को सुधार सकते हैं। हम एक समावेशी वातावरण बनाने के लिए प्रतिबद्ध हैं जो शिक्षार्थियों को नई भाषाओं और संस्कृतियों को अपनाने के लिए प्रोत्साहित करता है।",
          values: "हमारे मूल्य",
          v1: "सहयोग: हम मानते हैं कि एक साथ सीखना अधिक प्रभावी और सुखद है।",
          v2: "समावेशिता: हम सभी पृष्ठभूमि और दक्षता स्तरों के शिक्षार्थियों का स्वागत करते हैं।",
          v3: "नवाचार: हम आकर्षक और प्रभावी सीखने के अनुभव बनाने के लिए प्रौद्योगिकी का लाभ उठाते हैं।",
          v4: "समर्थन: हम शिक्षार्थियों को उनके भाषा लक्ष्यों को प्राप्त करने में मदद करने के लिए संसाधन और मार्गदर्शन प्रदान करते हैं।",
          v5: "समुदाय: हम अपने सदस्यों के बीच एकता और आपसी समर्थन की भावना को बढ़ावा देते हैं।",
          team: "हमारी टीम",
          teamintro: "हमारी टीम में उत्साही भाषा प्रेमी, शिक्षाविद, और प्रौद्योगिकी विशेषज्ञ शामिल हैं जो सभी के लिए भाषा सीखने को सुलभ और आनंदमय बनाने के लिए समर्पित हैं। हम अपने प्लेटफॉर्म को विकसित करने और सुधारने के लिए अथक प्रयास करते हैं, यह सुनिश्चित करने के लिए कि यह हमारे विविध उपयोगकर्ता आधार की आवश्यकताओं को पूरा करता है।",
          contact: "संपर्क करें",
          contactintro: "हम अपने उपयोगकर्ताओं से सुनना पसंद करते हैं! चाहे आपके पास कोई प्रश्न हो, प्रतिक्रिया हो, या बस हैलो कहना चाहते हों, बेझिझक हमसे संपर्क करें contact@collabnspeak.com पर। हम आपकी भाषा सीखने की यात्रा में आपकी मदद और समर्थन के लिए यहाँ हैं।",
          join: "आज ही CollabNSpeak में शामिल हों और भाषा शिक्षार्थियों और उत्साही लोगों के वैश्विक समुदाय का हिस्सा बनें। एक साथ, हम अपने भाषा लक्ष्यों को प्राप्त कर सकते हैं और एक अधिक जुड़ी हुई दुनिया बना सकते हैं।",
          start: "शुरू",
          end: "अंत"
        },
      },
      de: {
        translation: {
          home: "Heim",
          services: "Dienstleistungen",
          about: "Über uns",
          homepmessage : "Willkommen in unserer Sprachlern-Community, in der Sie in einer unterstützenden und interaktiven Umgebung zusammenarbeiten und Sprachen üben können!",
          newsession : "Neue Sitzung",
          existingsession: "Bestehende Sitzung",
          iceb: "Eisbrecher",
          gd : "Gruppendiskussion",
          debate: "Debatte",
          profile: "Profil",
          details : "Einzelheiten",
          editp: "Profil bearbeiten",
          taket: "Einen Test schreiben",
          username: "Nutzername",
          gender : "Geschlecht",
          save : "speichern",
          logout: "Ausloggen",
          welcome: "Willkommen bei CollabNSpeak!",
          servicesIntro: "Bei CollabNSpeak bieten wir eine umfassende Plattform für Sprachpraxis und Kompetenzentwicklung durch spannende Aktivitäten und interaktive Funktionen. Entdecken Sie unser vielfältiges Dienstleistungsangebot, das darauf ausgelegt ist, Ihr Sprachenlernerlebnis zu verbessern:",
          iceBreaking: "Eisbrecher-Sitzungen",
          iceBreakingintro: "Beginnen Sie Ihre Sprachreise, indem Sie in einer entspannten und unterstützenden Umgebung das Eis brechen. Unsere strukturierten Eisbrecher-Sitzungen helfen Ihnen, Sprachbarrieren zu überwinden und Selbstvertrauen im Sprechen Ihrer Zielsprache aufzubauen.",
          debateClubs: "Debattierclubs",
          debateClubsintro: "Treten Sie lebhaften Debattierclubs bei, um Ihre Sprachfähigkeiten zu verbessern, während Sie verschiedene Themen und Standpunkte erkunden. Nehmen Sie an anregenden Diskussionen teil und lernen Sie, Ihre Gedanken in Ihrer gewählten Sprache effektiv zu artikulieren.",
          groupDiscussions: "Gruppendiskussionen",
          groupDiscussionsintro: "Nehmen Sie an dynamischen Gruppendiskussionen teil, die von erfahrenen Moderatoren geleitet werden. Arbeiten Sie mit anderen Lernenden zusammen, um Ideen auszutauschen, Erfahrungen zu teilen und Ihre Sprachgewandtheit durch interaktive Gespräche zu verbessern.",
          videoCallFeature: "Videoanruffunktion",
          videoCallFeatureintro: "Erleben Sie Echtzeitkommunikation mit unserer integrierten Videoanruffunktion. Verbinden Sie sich mit anderen Nutzern weltweit und nehmen Sie an intensiven Sprachübungen teil, ohne den Komfort Ihres Zuhauses zu verlassen. Üben Sie Ihre Sprechfähigkeiten, erhalten Sie sofortiges Feedback und bauen Sie bedeutungsvolle Verbindungen mit Sprachbegeisterten auf der ganzen Welt auf.",
          communitySupport: "Gemeinschaftsunterstützung",
          communitySupportintro: "Treten Sie unserer lebendigen Gemeinschaft von Sprachlernenden und Pädagogen bei, die sich gegenseitig bei ihren Sprachzielen unterstützen. Teilen Sie Ressourcen, tauschen Sie Tipps aus und feiern Sie gemeinsam Meilensteine auf unserer kollaborativen Plattform. Verbinden Sie sich mit Gleichgesinnten und beginnen Sie gemeinsam eine lohnende Sprachlernreise.",
          startyour: "Beginnen Sie noch heute Ihr Sprachenlernerlebnis mit CollabNSpeak und entdecken Sie eine ganze neue Welt voller Möglichkeiten, Ihre Sprachfähigkeiten zu verbessern und sich mit anderen zu verbinden!",
          abcns: "Über CollabNSpeak",
          abcnsintro: "Bei CollabNSpeak ist es unsere Mission, Sprachbarrieren abzubauen und eine globale Gemeinschaft zu schaffen, in der Sprachlernende üben, sich verbinden und gemeinsam wachsen können. Wir glauben an die Kraft der Zusammenarbeit und Kommunikation, um das Sprachenlernen zu verbessern und bedeutungsvolle Verbindungen zu fördern.",
          mission: "Unsere Mission",
          missintro: "Unsere Mission ist es, eine unterstützende und interaktive Plattform bereitzustellen, auf der Sprachlernende an praktischen Sprachaktivitäten teilnehmen, Selbstvertrauen aufbauen und ihre Sprachgewandtheit verbessern können. Wir sind bestrebt, eine inklusive Umgebung zu schaffen, die Lernende dazu ermutigt, neue Sprachen und Kulturen zu übernehmen.",
          values: "Unsere Werte",
          v1: "Zusammenarbeit: Wir glauben, dass gemeinsames Lernen effektiver und angenehmer ist.",
          v2: "Inklusivität: Wir begrüßen Lernende aus allen Hintergründen und Kompetenzniveaus.",
          v3: "Innovation: Wir nutzen Technologie, um ansprechende und effektive Lernerlebnisse zu schaffen.",
          v4: "Unterstützung: Wir bieten Ressourcen und Anleitung, um Lernenden zu helfen, ihre Sprachziele zu erreichen.",
          v5: "Gemeinschaft: Wir fördern ein Gefühl der Zugehörigkeit und gegenseitigen Unterstützung unter unseren Mitgliedern.",
          team: "Unser Team",
          teamintro: "Unser Team besteht aus leidenschaftlichen Sprachbegeisterten, Pädagogen und Technologen, die sich dafür einsetzen, das Sprachenlernen für alle zugänglich und angenehm zu gestalten. Wir arbeiten unermüdlich daran, unsere Plattform zu entwickeln und zu verbessern, um sicherzustellen, dass sie den Bedürfnissen unserer vielfältigen Benutzerbasis gerecht wird.",
          contact: "Kontaktieren Sie uns",
          contactintro: "Wir hören gerne von unseren Nutzern! Ob Sie eine Frage haben, Feedback geben oder einfach nur Hallo sagen möchten, zögern Sie nicht, uns unter contact@collabnspeak.com zu kontaktieren. Wir sind hier, um Ihnen auf Ihrer Sprachlernreise zu helfen und Sie zu unterstützen.",
          join: "Treten Sie noch heute CollabNSpeak bei und werden Sie Teil einer globalen Gemeinschaft von Sprachlernenden und Enthusiasten. Gemeinsam können wir unsere Sprachziele erreichen und eine stärker vernetzte Welt schaffen.",
          start: "Start",
          end: "Ende"
        },
      },
    },
  });

export default i18next;