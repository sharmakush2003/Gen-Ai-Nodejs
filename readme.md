// Notes For Video 1st:-

**1. AI naye sawalon ka jawab de sakta hai:** AI aise sawalon ke jawab bhi khud generate kar sakta hai jo usne apni life mein pehle kabhi nahi dekhe honge.

**2. ChatGPT 'रट्टा' (Memorize) nahi maarta:** ChatGPT apne database mein 'Question = Answer' format mein data store karke nahi rakhta (jaise 'Hi' pucha toh 'Hello' save kar lo). Yeh is tarike se kaam nahi karta.

**3. Pre-saved answers kaam kyu nahi karte?:** Agar ChatGPT sab kuch pehle se save karke rakhta, toh woh hamari spelling mistakes (jaise "how is you") ko nahi samajh pata aur na hi hamare naye custom code ke bugs theek kar pata. User ke sawal infinite (anginat) ho sakte hain jinhe save karna namumkin hai.

**4. Training ka asar:** Jaise ek insaan 500 books padh kar kisi bhi naye sawal ka jawab apne dimag se bana sakta hai, waise hi AI model ko pehle bahut bade data par 'train' (Pre-trained) kiya jata hai taaki woh nayi situations ko samajh sake.

**5. Pattern Recognition (Insaanon ki tarah):** Jaise hum 10,000, 11,000, 12,000 ki series dekh kar agla number 13,000 bina exact sawal pehle dekhe guess kar lete hain, waise hi AI bhi data ke beech ka 'pattern' dhundhta hai.

**6. Next Word Prediction:** ChatGPT ke kaam karne ka sabse bada secret yahi hai ki woh sirf diye gaye sentence ke aage aane wala **next word (agla shabd) predict karta hai**.

**7. Step-by-step answer generation:** Jab aap "Hi, how are you" puchte hain, toh AI pehle "I" predict karta hai. Phir us poore naye sentence ko input mein daalkar agla word "am" predict karta hai, aur aise hi agla word "fine" guess karta hai jab tak jawab poora na ho jaye.

**8. Computer ko hamari bhasha nahi aati:** Computer ko "Hi" ya "How" jaise shabdon ka meaning nahi pata hota; woh sirf aur sirf numbers samajhta hai.

**9. Tokenization ka role:** Shabdon ko numbers mein badalne ke process ko **'Tokenization'** kehte hain. Isme har word ya character ko ek unique number (token) de diya jata hai (Jaise 'Hi' ko 36, 'How' ko 29 de diya gaya).

**10. Har AI model alag token banata hai:** ChatGPT (GPT-4) ya DeepSeek jaise alag-alag AI models tokenization ke liye apne alag-alag numbers aur rules use karte hain.

**11. Numbers ke beech pattern dhundhna:** Tokenization ke baad, ChatGPT in numbers ke beech mathematical pattern dhundhta hai aur aage aane wale 'next number' ko predict karta hai.

**12. Wapas text (words) mein convert karna:** Jab AI next numbers (jaise 230, 78, 12) predict kar leta hai, toh woh unhe wapas match karke words (I, am, fine) mein badal deta hai aur screen par final answer print kar deta hai.

**13. GenAI (Generative AI) ka asli matlab:** GenAI ek aisa AI hai jo khud se naya data, naye answers, ya naya meaning *generate* kar sake, chahe usne woh exact data ya sawal pehle kabhi na dekha ho.

**14. GPT ka Full Form kya hai?:** 
* **G**enerative (jo naya answer generate kare)
* **P**re-trained (jise pehle se bade data par train kiya gaya ho)
* **T**ransformer (jo input text ya data ko analyze karke use naye output mein transform kar sake).

**15. Ek hi sawal ke alag-alag jawab kyu?:** ChatGPT probability (sambhavna) par chalta hai. Jaise 1, 2, 4 ke pattern ke baad agla number 8 (double) bhi ho sakta hai aur 7 (addition) bhi. Waise hi, AI ek hi sawal ke liye har baar ek alag logical pattern chun sakta hai, jisse humein "I am fine" ya "I am doing great" jaise alag-alag jawab milte hain.

// Notes For Video 2nd:-

Naye video (How Does LLM Work | Code Implementation) ke main 15 key points yahan diye gaye hain, jinhe aap apne juniors ko aasaani se samjha sakte hain:

**1. LLM Calculator Nahi Hai:** ChatGPT ya Gemini jaise models actually mein math (jaise 2+2=4) calculate nahi karte, woh sirf apne training data ke basis par agla word/token **predict** karte hain.

**2. Prediction ki accuracy:** LLM ek astrologer (jyotish) ki tarah hote hain, jo patterns ke base par itni accurate prediction karte hain ki humein lagta hai woh answer calculate kar rahe hain.

**3. Real-time data ka na hona:** Pure LLM aaj ka mausam ya current news nahi bata sakte, kyunki unki knowledge sirf unke training data tak hi limited hoti hai.

**4. Code run karne ki inability:** LLM aapke liye Python ya koi aur code likh toh sakte hain, par woh use khud se apne andar run (execute) nahi kar sakte.

**5. Badi calculations mein fail:** Agar aap LLM ko aisi badi calculation (jaise 123 * 678) de dein jo usne training mein nahi dekhi hai, toh woh exact answer predict nahi kar pata aur fail ho jata hai.

**6. Training data ka asar:** Agar LLM ko galat data par train kiya gaya hai (jaise "Strawberry mein 2 'R' hote hain"), toh woh confidently galat answer hi dega kyunki woh wahi predict karega jo usne dekha hai.

**7. 'External Tools' ki madad:** In calculations aur real-time data ki kamzoriyon ko door karne ke liye LLMs 'External Tools' (jaise Python interpreter ya Web Search) ka use karte hain.

**8. Tools kaise kaam karte hain:** Jab LLM ko math solve karni hoti hai, toh woh ek python code likh kar external tool ko bhejta hai. Tool use run karke result wapas LLM ko deta hai, aur phir LLM final answer aapko dikhata hai.

**9. API Keys ka use:** Hum directly code likh kar bhi in LLMs se baat kar sakte hain. Iske liye humein API keys ki zaroorat hoti hai (jaise Google AI Studio free API key deta hai).

**10. Code Integration:** In models ko apne system mein use karne ke liye VS Code, Node.js aur inke official packages (jaise `@google/generative-ai`) install karke script likhi ja sakti hai.

**11. Context (Memory) ki zaroorat:** Pure LLMs ke paas khud ki koi memory nahi hoti. Agar aap naya sawal puchenge, toh woh aapke pichle message ko yaad nahi rakhte. 

**12. Poori Chat History bhejna:** Jab aap ChatGPT ya kisi AI se baat karte hain, toh background mein aapka sirf current sawal nahi, balki **poori chat history** LLM ko bheji jati hai taaki uske paas baat ka 'Context' rahe.

**13. Manual History Maintain karna:** Jab hum code (jaise JavaScript) se AI banate hain, toh humein ek Array banana padta hai jisme 'User' ka sawal aur 'Model' ka jawab store hota hai taaki AI purani baaton ko samajh sake.

**14. Auto History Management:** Naye API methods (jaise `chat.sendMessage()`) inbuilt history khud maintain karte hain, jisse developers ko baar-baar manually pura chat history array manage nahi karna padta.

**15. Conclusion (Nishkarsh):** Pure LLM sirf ek best prediction machine hai. Exact Calculation, code run karne, aur real-time data ke liye woh hamesha external tools par hi nirbhar karta hai.
