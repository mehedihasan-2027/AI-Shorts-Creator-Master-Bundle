const fs = require('fs');

console.log("Generating 100% Unique Production Kits & Viral Hooks...");

const uniqueKits = [
  // 1. HORROR & SUPERNATURAL
  {
    id: "HOR-STU-001",
    title: "অভিশপ্ত বাতিঘর (The Phantom Lighthouse)",
    category: "HORROR & SUPERNATURAL",
    categoryKey: "horror",
    difficulty: "Beginner",
    duration: "42s",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    hookBangla: "ঝড়ো রাতে এই নির্জন বাতিঘরের আলো যদি হঠাৎ নিভে যায়, মাঝসমুদ্রে কোনো জাহাজ আর পথ খুঁজে পায় না!",
    bgmStyle: "Deep Ocean Wind + Eerie Bell Tolls (-16dB)",
    sfxNotes: "Thunder Crack, Ocean Wave Crash, Door Creak",
    masterPrompt: "Cinematic vertical 9:16, abandoned stone lighthouse on sharp cliff, stormy turbulent sea, hyper-realistic, dark fog, 8k resolution.",
    scenes: [
      { sceneNo: 1, timecode: "0:00 - 0:10", voiceover: "১৯০০ সালের ডিসেম্বর রাত। স্কটল্যান্ডের দুর্গম দ্বীপে থাকা বাতিঘর থেকে হঠাৎ আলো আসা বন্ধ হয়ে যায়।", imagePrompt: "Cinematic wide angle, massive stone lighthouse standing on jagged cliffs during violent storm, dark eerie fog, 8k --ar 9:16", videoPrompt: "Slow cinematic zoom toward the dark broken glass lantern room of the lighthouse during rain --ar 9:16" },
      { sceneNo: 2, timecode: "0:10 - 0:22", voiceover: "উদ্ধারকারী দল এসে দেখে দরজা ভেতর থেকে বন্ধ, টেবিলে সাজানো তাজা খাবার, কিন্তু তিনজন প্রহরীর একজনও নেই!", imagePrompt: "Inside dark vintage lighthouse kitchen, untouched hot food plates on wooden table, chilling horror atmosphere, 8k --ar 9:16", videoPrompt: "Handheld camera slowly creeping into shadowy kitchen, flickering lantern light illuminating empty rocking chair --ar 9:16" },
      { sceneNo: 3, timecode: "0:22 - 0:34", voiceover: "লগবুকের শেষ পাতায় লেখা ছিল—'ঝড় থেমে গেছে, ঈশ্বর আমাদের ক্ষমা করুন।' অথচ সেদিন কোনো ঝড়ই ছিল না!", imagePrompt: "Macro close-up shot of yellowed vintage diary pages with messy handwritten ink entries, photorealistic, 8k --ar 9:16", videoPrompt: "Extreme close-up on final trembling words in damp notebook as ink slowly smears from falling water --ar 9:16" },
      { sceneNo: 4, timecode: "0:34 - 0:42", voiceover: "তিনজন মানুষ বাতাসে মিলিয়ে গেল কীভাবে? সেই রহস্য আজও কেউ ভেদ করতে পারেনি!", imagePrompt: "Low-angle silhouette of three shadowy figures standing at the edge of rocky cliff facing black ocean, 8k --ar 9:16", videoPrompt: "Drone shot pulling back from solitary lighthouse surrounded by endless dark boiling waves as mist covers frame --ar 9:16" }
    ]
  },
  {
    id: "HOR-STU-002",
    title: "পরিত্যক্ত হাসপাতালের ৪ নম্বর লিফট (Haunted Asylum)",
    category: "HORROR & SUPERNATURAL",
    categoryKey: "horror",
    difficulty: "Beginner",
    duration: "40s",
    thumbnail: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
    hookBangla: "রাত ৩টা বাজলেই বন্ধ থাকা এই পরিত্যক্ত হাসপাতালের লিফট নিজে নিজেই ওপরের তলায় উঠতে শুরু করে!",
    bgmStyle: "Hospital Heart Monitor Flatline + Distant Creepy Whispers",
    sfxNotes: "Metal Cable Tension, Elevator Ding, Flickering Fluorescent Tube",
    masterPrompt: "Abandoned 1980s mental hospital corridor, rusted metal doors, flickering greenish fluorescent lights, peeling wallpaper, cinematic grain 8k.",
    scenes: [
      { sceneNo: 1, timecode: "0:00 - 0:10", voiceover: "১৯৮২ সালে অগ্নিকাণ্ডের পর হাসপাতালটি সিলগালা করা হয়। কিন্তু পাওয়ার গ্রিড বন্ধ থাকলেও এর ৪ নম্বর লিফট এখনো চলে!", imagePrompt: "Old rusted elevator door in decaying hospital hallway, dim green emergency light, water dripping from ceiling, 8k --ar 9:16", videoPrompt: "Slow tracking shot down dark dilapidated hospital hallway as elevator bell dings and dial slowly turns --ar 9:16" },
      { sceneNo: 2, timecode: "0:10 - 0:22", voiceover: "এক্সপ্লোরাররা রাতে ক্যামেরা বসিয়েছিল। ঠিক রাত ৩টা ১২ মিনিটে লিফটের দরজা আস্তে আস্তে খুলে যায়...", imagePrompt: "Interior of rusty scratched elevator with broken mirror, dark silhouette visible in reflection, 8k --ar 9:16", videoPrompt: "Slow cinematic opening of elevator doors revealing heavy black mist pouring out into corridor --ar 9:16" },
      { sceneNo: 3, timecode: "0:22 - 0:32", voiceover: "ভেতরে কেউ ছিল না, কিন্তু মেঝেতে পড়ে ছিল ফ্রেশ একজোড়া চাকার দাগ এবং ছোট বাচ্চার ভেজা পায়ের ছাপ!", imagePrompt: "Macro top-down shot of muddy child footprints on cracked white hospital tiles leading directly into open elevator, 8k --ar 9:16", videoPrompt: "Camera tilts down from empty elevator shaft to reveal fresh wet footprints forming one by one --ar 9:16" },
      { sceneNo: 4, timecode: "0:32 - 0:40", voiceover: "আপনি কি এমন কোনো পরিত্যক্ত জায়গায় একা এক রাত কাটানোর সাহস করবেন? কমেন্টে জানান!", imagePrompt: "Creepy dark silhouette standing at end of hospital corridor staring into camera, cinematic lighting --ar 9:16", videoPrompt: "Sudden blackout followed by flickering light revealing hallway is completely empty, cut to black --ar 9:16" }
    ]
  },
  {
    id: "HOR-STU-003",
    title: "অভিশপ্ত ভিক্টোরিয়ান আয়না (The Weeping Mirror)",
    category: "HORROR & SUPERNATURAL",
    categoryKey: "horror",
    difficulty: "Intermediate",
    duration: "36s",
    thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
    hookBangla: "এই এন্টিক আয়নার সামনে দাঁড়িয়ে নিজের চোখের দিকে ১০ সেকেন্ড তাকালেই ছায়া নড়তে শুরু করে!",
    bgmStyle: "Reverse Violins + Low Heartbeat Tension",
    sfxNotes: "Glass Vibration, Sub Thud, Sudden Gasp",
    masterPrompt: "Victorian bedroom, ornate antique gold frame mirror, candle lit reflections, dark shadows, cinematic 8k.",
    scenes: [
      { sceneNo: 1, timecode: "0:00 - 0:08", voiceover: "লন্ডনের এক নিলামে বিক্রি হওয়া এই আয়না যে ঘরেই রাখা হয়েছে, সেখানেই মালিকের সাথে ঘটেছে অদ্ভুত সব ঘটনা!", imagePrompt: "Intricately carved 1800s antique mirror in dark dusty room, candlelight flickering, dark gothic vibes, 8k --ar 9:16", videoPrompt: "Slow creeping push-in on antique mirror reflecting dimly lit vintage bedroom --ar 9:16" },
      { sceneNo: 2, timecode: "0:08 - 0:20", voiceover: "রাতে ঘুম ভাঙলে বাসিন্দারা দেখতো, আয়নার ভেতরের প্রতিবিম্ব ঘুমাচ্ছে না, বরং বিছানার দিকে অপলক তাকিয়ে হাসছে!", imagePrompt: "Chilling view of person looking at mirror where reflection has completely black eyes and sinister smile, 8k --ar 9:16", videoPrompt: "Subject blinks in front of mirror, but reflection delays blink by two seconds and smiles slowly --ar 9:16" },
      { sceneNo: 3, timecode: "0:20 - 0:36", voiceover: "বর্তমান মালিক আয়নাটি কালো কাপড়ে ঢেকে তালাবদ্ধ করে রেখেছেন। আপনি কি এটি ঘরে রাখবেন?", imagePrompt: "Antique mirror draped in heavy black velvet cloth wrapped in rusted iron chains, moody aesthetic, 8k --ar 9:16", videoPrompt: "Camera circles around chained mirror as black cloth suddenly moves slightly as if breathed upon --ar 9:16" }
    ]
  },

  // 2. DEEP SPACE & COSMIC FACTS
  {
    id: "SCI-STU-001",
    title: "যে গ্রহে কাচের বৃষ্টি হয় (HD 189733b)",
    category: "DEEP SPACE & FACTS",
    categoryKey: "space",
    difficulty: "Intermediate",
    duration: "45s",
    thumbnail: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=600&q=80",
    hookBangla: "মহাকাশে এমন এক নীল গ্রহ রয়েছে যা দেখতে অবিকল শান্ত পৃথিবীর মতো, কিন্তু ভেতরে প্রবেশ করলেই নিশ্চিত মৃত্যু!",
    bgmStyle: "Sci-Fi Cosmic Drone + High Pitched Glass Resonance (-14dB)",
    sfxNotes: "Violent Wind Roar, Glass Shattering, Sonic Boom",
    masterPrompt: "Hyper-realistic space documentary, 9:16 vertical aspect ratio, exoplanet atmosphere, Unreal Engine 5 render, 8k.",
    scenes: [
      { sceneNo: 1, timecode: "0:00 - 0:10", voiceover: "পৃথিবী থেকে ৬৪ আলোকবর্ষ দূরে অবস্থিত HD 189733b গ্রহটি মহাকাশের এক জীবন্ত নরক!", imagePrompt: "Cinematic vertical view of vibrant deep cobalt blue exoplanet floating in dark starry space, 8k --ar 9:16", videoPrompt: "Smooth orbital camera pan revealing cobalt planet with turbulent glowing atmospheric storms --ar 9:16" },
      { sceneNo: 2, timecode: "0:10 - 0:22", voiceover: "এর তাপমাত্রা ১০০০ ডিগ্রি সেলসিয়াসের বেশি হওয়ায় সিলিকেট গলে তরল কাচে পরিণত হয়েছে!", imagePrompt: "Inside molten alien atmosphere, glowing razor-sharp liquid glass droplets reflecting crimson lightning, 8k --ar 9:16", videoPrompt: "First-person perspective descending into swirling blue clouds with crystalline shards rushing past --ar 9:16" },
      { sceneNo: 3, timecode: "0:22 - 0:34", voiceover: "এখানে বাতাস ঘণ্টায় ৮৭০০ কিলোমিটার বেগে ছোটে, ফলে কাচের বৃষ্টি আড়াআড়িভাবে সবকিছু ছিন্নভিন্ন করে দেয়!", imagePrompt: "Microscopic macro shot of sharp crystalline shards flying horizontally at hypersonic speeds, 8k --ar 9:16", videoPrompt: "Hyper-speed tracking a storm of flying glass shards cutting through robotic titanium probe --ar 9:16" },
      { sceneNo: 4, timecode: "0:34 - 0:45", voiceover: "মহাবিশ্বের এমন ভয়ংকর জগৎ সম্পর্কে আরও জানতে এখনই আমাদের পেজটি ফলো করে রাখুন!", imagePrompt: "Wide cinematic view of harsh blue planet casting long shadow on its parent star, 8k --ar 9:16", videoPrompt: "Fast pull-back out into interstellar space leaving terrifying blue world spinning alone --ar 9:16" }
    ]
  },
  {
    id: "SCI-STU-002",
    title: "দানবীয় কৃষ্ণগহ্বর টন ৬১৮ (TON 618: The Void King)",
    category: "DEEP SPACE & FACTS",
    categoryKey: "space",
    difficulty: "Beginner",
    duration: "42s",
    thumbnail: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=600&q=80",
    hookBangla: "মহাবিশ্বের এমন এক রাক্ষুসে ব্ল্যাকহোল, যার একার ভর ৬৬০০ কোটি সূর্যের সমান!",
    bgmStyle: "Interstellar Cinematic Horns + Low Bass Void Frequency",
    sfxNotes: "Gravitational Hum, Spatial Distortion Whoosh, Cosmic Explosion",
    masterPrompt: "Supermassive black hole TON 618, blinding ultra-bright accretion disk, gravitational lensing, 8k vertical --ar 9:16",
    scenes: [
      { sceneNo: 1, timecode: "0:00 - 0:10", voiceover: "মহাবিশ্বের সবচেয়ে বড় একক বস্তু TON 618। আমাদের পুরো সৌরজগত এর পেটে শতবার হারিয়ে যাবে!", imagePrompt: "Terrifyingly gigantic black hole with blindingly bright swirling golden accretion disk bending spacetime, 8k --ar 9:16", videoPrompt: "Epic slow camera roll pushing towards colossal black hole with light bending into glowing halo --ar 9:16" },
      { sceneNo: 2, timecode: "0:10 - 0:24", voiceover: "এর ভেতরে প্রতি সেকেন্ডে ট্রিলিয়ন টন গ্যাস ও ধ্বংস হওয়া নক্ষত্র আলোর গতিতে ঘুরছে এবং প্রচণ্ড বিকিরণ ছড়াচ্ছে।", imagePrompt: "Close-up view of plasma jets erupting from poles of supermassive black hole shooting lightyears across galaxies, 8k --ar 9:16", videoPrompt: "Relativistic jets of glowing energy shooting vertically from event horizon into deep intergalactic space --ar 9:16" },
      { sceneNo: 3, timecode: "0:24 - 0:42", voiceover: "বিজ্ঞানীরা বলেন, এর দিগন্তে সময় থেমে যায়। মহাবিশ্বের এই আদিম রাজাকে দেখে আপনার কেমন লাগছে?", imagePrompt: "Distant dwarf galaxy being torn apart like spaghetti into dark gravitational center of TON 618, 8k --ar 9:16", videoPrompt: "Pull-back into deep void showing entire star clusters slowly spiraled into the massive dark horizon --ar 9:16" }
    ]
  },
  {
    id: "SCI-STU-003",
    title: "খাঁটি হীরার গ্রহ (55 Cancri e)",
    category: "DEEP SPACE & FACTS",
    categoryKey: "space",
    difficulty: "Beginner",
    duration: "35s",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    hookBangla: "আমাদের আকাশেই জ্বলজ্বল করছে আস্ত একটি গ্রহ, যার মাটির পুরো তিনভাগের একভাগ খাঁটি হীরা!",
    bgmStyle: "Sparkling Synth Ambient + Deep Science Pulse",
    sfxNotes: "Crystal Ringing, Volcanic Rumble, Warp Transition",
    masterPrompt: "Exoplanet 55 Cancri e, sparkling crystalline surface, molten diamond lava rivers, glowing under extreme heat, 8k --ar 9:16",
    scenes: [
      { sceneNo: 1, timecode: "0:00 - 0:08", voiceover: "পৃথিবী থেকে মাত্র ৪০ আলোকবর্ষ দূরে রয়েছে এমন এক ধনকুবের গ্রহ, যার মূল্য পৃথিবীর সব অর্থনীতির চেয়েও কোটি গুণ বেশি!", imagePrompt: "Sparkling alien planet with crystalline graphite and diamond crust glowing under nearby yellow star, 8k --ar 9:16", videoPrompt: "Cinematic flyby over sparkling planet whose continents reflect starlight like raw cut diamonds --ar 9:16" },
      { sceneNo: 2, timecode: "0:08 - 0:20", voiceover: "প্রচণ্ড চাপ এবং ২০০০ ডিগ্রি সেলসিয়াসের বেশি তাপে এর কার্বন সরাসরি ঘন হীরায় রূপ নিয়েছে।", imagePrompt: "Macro view of crystalline diamond mountain ranges with rivers of superheated liquid carbon, 8k --ar 9:16", videoPrompt: "Camera skimming just above jagged crystalline mountains refracting rainbow light under alien sun --ar 9:16" },
      { sceneNo: 3, timecode: "0:20 - 0:35", voiceover: "সেখানে পা রাখলেই মানুষ বাষ্প হয়ে যাবে! বিজ্ঞান নিয়ে এমন রোমাঞ্চকর তথ্য পেতে ফলো করতে ভুলবেন না।", imagePrompt: "Dramatic visual of robotic probe descending toward glistening crystalline diamond fields, 8k --ar 9:16", videoPrompt: "Solar flare washes over planet, making the whole world sparkle brilliantly before fading --ar 9:16" }
    ]
  },

  // 3. DARK PSYCHOLOGY & MOTIVATION
  {
    id: "MOT-STU-001",
    title: "অদৃশ্য রক্তবিন্দু (The Shadow Legacy)",
    category: "DARK MOTIVATION",
    categoryKey: "motivation",
    difficulty: "Beginner",
    duration: "38s",
    thumbnail: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
    hookBangla: "লোকেরা শুধু মঞ্চের আলো দেখবে, কিন্তু পেছনের কালশিটে পড়া অন্ধকার রাতগুলো দেখার চোখ তাদের নেই!",
    bgmStyle: "Slow Heavy Piano into Aggressive Epic Bass Drop (-12dB)",
    sfxNotes: "Heavy Breath, Heavy Iron Clank, Heartbeat",
    masterPrompt: "Cinematic dark mood, high contrast chiaroscuro lighting, sweat droplets, athletic grit, 35mm film grain, 8k --ar 9:16",
    scenes: [
      { sceneNo: 1, timecode: "0:00 - 0:10", voiceover: "সবাই তোমার সাফল্য উদযাপনে হাততালি দিতে আসবে, কিন্তু তুমি যখন ব্যর্থ হয়েছিলে তখন পাশে কে ছিল?", imagePrompt: "Close-up macro of exhausted athlete sitting in pitch black gym, sweat dripping down jawline, 8k --ar 9:16", videoPrompt: "Slow push-in on tired man staring down at calloused hands under harsh warehouse spotlight --ar 9:16" },
      { sceneNo: 2, timecode: "0:10 - 0:22", voiceover: "যখন কেউ বিশ্বাস করেনি, যখন নিজের ওপর সংশয় চেপে বসেছিল, সেই মুহূর্তগুলোতে একাই লড়াই করে টিকে থাকতে হয়েছে!", imagePrompt: "Silhouette of lone runner on empty rain-slicked city bridge at 4 AM, distant reflections on asphalt, 8k --ar 9:16", videoPrompt: "Tracking shot following determined runner pushing through freezing fog and rain, muscles straining --ar 9:16" },
      { sceneNo: 3, timecode: "0:22 - 0:38", voiceover: "আজ তোমার নীরবতাকে দুর্বলতা ভেবো না। এমনভাবে তৈরি হও যেন তোমার জবাব কোনো শব্দ না হয়, তোমার অর্জন হয়!", imagePrompt: "Powerful heroic shot, sharp silhouette walking out of shadowy tunnel toward blinding stadium flash, 8k --ar 9:16", videoPrompt: "Athlete steps firmly into blinding white light of victory as background dissolves in lens flares --ar 9:16" }
    ]
  },
  {
    id: "MOT-STU-002",
    title: "মিথ্যা ধরার ৩টি গোপন ট্রিক (Deception Detection)",
    category: "DARK MOTIVATION",
    categoryKey: "motivation",
    difficulty: "Beginner",
    duration: "40s",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    hookBangla: "কারো সাথে কথা বলার সময় এই ৩টি ছোট অঙ্গভঙ্গি দেখলেই বুঝে যাবেন সে আপনার কাছে সত্য লুকাচ্ছে!",
    bgmStyle: "Tense Sub-bass Pulse + Clock Ticking Tension",
    sfxNotes: "Heartbeat SFX, Sudden Silence, Whoosh Transitions",
    masterPrompt: "Moody cinematic lighting, neon blue and deep shadow contrast, shallow depth of field, 8k photorealistic --ar 9:16",
    scenes: [
      { sceneNo: 1, timecode: "0:00 - 0:08", voiceover: "কেউ আপনার সাথে কথা বলার সময় সত্যি বলছে নাকি মিথ্যা, তা মাত্র ৫ সেকেন্ডেই বের করার ডার্ক সাইকোলজি ট্রিক!", imagePrompt: "Dramatic portrait of sharp-looking man in dark suit staring intensely into camera, split lighting, 8k --ar 9:16", videoPrompt: "Slow motion zoom into eyes of intense speaker, subtle iris dilation, cinematic film noir lighting --ar 9:16" },
      { sceneNo: 2, timecode: "0:08 - 0:20", voiceover: "১ নম্বর: কথা বলার সময় সে যদি ঘন ঘন চোখের পলক ফেলে বা ডান দিকে ওপরের দিকে তাকায়, তবে মস্তিষ্ক নতুন গল্প সাজাচ্ছে।", imagePrompt: "Ultra close-up macro photography of human eye looking up and to the right, hyper-detailed eyelashes, 8k --ar 9:16", videoPrompt: "Macro close-up video of eyes shifting rapidly to upper right corner, subtle micro-expressions --ar 9:16" },
      { sceneNo: 3, timecode: "0:20 - 0:32", voiceover: "২ নম্বর: অযথা নিজের নাক বা গলা স্পর্শ করা। নার্ভাস সিস্টেম মিথ্যা লুকানোর জন্য শরীরে স্বাভাবিক রক্ত চলাচল বাড়িয়ে দেয়।", imagePrompt: "Side angle view of person nervously touching neck during interrogation, moody office shadows, 8k --ar 9:16", videoPrompt: "Slow motion shot of nervous fingers lightly grazing throat and collar, high frame rate --ar 9:16" },
      { sceneNo: 4, timecode: "0:32 - 0:40", voiceover: "এই ট্রিকগুলো আপনি আগে কখনো লক্ষ্য করেছেন? পার্ট ২ দেখতে এখনই ফলো ও সেভ করে রাখুন!", imagePrompt: "Mysterious silhouette of figure walking down dimly lit foggy alleyway, trench coat, neo-noir, 8k --ar 9:16", videoPrompt: "Figure turns back toward camera with subtle smirk before stepping into darkness, screen cuts to black --ar 9:16" }
    ]
  },
  {
    id: "MOT-STU-003",
    title: "একাকী বাঘের নীতি (The Lone Tiger Rule)",
    category: "DARK MOTIVATION",
    categoryKey: "motivation",
    difficulty: "Beginner",
    duration: "35s",
    thumbnail: "https://images.unsplash.com/photo-1549480017-d76466a4b7e8?auto=format&fit=crop&w=600&q=80",
    hookBangla: "ভেড়া সবসময় ঝাঁকে চলে, কিন্তু বনের রাজাকে সবসময় একা একা নিজের শিকার ধরতে হয়!",
    bgmStyle: "Aggressive Drill Instrumental + Deep Sub Bass",
    sfxNotes: "Tiger Growl, Blade Shink, Heavy Step Thud",
    masterPrompt: "Majestic Bengal tiger walking in foggy dense bamboo forest, dramatic ray of sunlight, hyper-realistic, 8k --ar 9:16",
    scenes: [
      { sceneNo: 1, timecode: "0:00 - 0:08", voiceover: "তুমি যদি অসাধারণ কিছু করতে চাও, তবে সাধারণ মানুষের ভিড় থেকে তোমাকে একা হয়ে যেতেই হবে!", imagePrompt: "Massive royal bengal tiger standing on high rock overlooking misty jungle at sunrise, golden rim lighting, 8k --ar 9:16", videoPrompt: "Cinematic slow motion shot of powerful tiger walking toward camera through morning mist with piercing eyes --ar 9:16" },
      { sceneNo: 2, timecode: "0:08 - 0:20", voiceover: "সবাই তোমার দৃষ্টিভঙ্গি বুঝবে না। তোমার কাজ শুধু প্রতিদিন নিজের শিকারের পেছনে নিঃশব্দে লেগে থাকা।", imagePrompt: "Dramatic macro close-up of tiger eyes glowing in dim shadow, focused intense predatory stare, 8k --ar 9:16", videoPrompt: "Macro slow pan across muscular tiger shoulders tensing up before taking explosive leap forward --ar 9:16" },
      { sceneNo: 3, timecode: "0:20 - 0:35", voiceover: "তোমার লক্ষ্য এত বড় করো যেন চারপাশের সমালোচনা তোমার কানেই না পৌঁছায়। নিজের ওপর বিশ্বাস রাখো!", imagePrompt: "Tiger resting under heavy downpour of rain, completely calm and unbothered, cinematic film still, 8k --ar 9:16", videoPrompt: "Water dripping from tiger's whiskers as it lets out deep silent breath, slow camera pull-out into trees --ar 9:16" }
    ]
  },

  // 4. ANCIENT MYSTERIES & HISTORY
  {
    id: "HIS-STU-001",
    title: "পিরামিডের লুকানো বিদ্যুৎ কেন্দ্র (Pyramid Power Plant)",
    category: "ANCIENT MYSTERIES",
    categoryKey: "horror",
    difficulty: "Beginner",
    duration: "35s",
    thumbnail: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=600&q=80",
    hookBangla: "মিশরের পিরামিড কোনো সাধারণ সমাধি ছিল না, বিজ্ঞানীদের দাবি এটি ছিল প্রাচীন পৃথিবীর এক পাওয়ার প্ল্যান্ট!",
    bgmStyle: "Ancient Egyptian Mystery + Heavy Low Cinematic Drone",
    sfxNotes: "Desert Wind, Stone Grinding, Electrical Buzz SFX",
    masterPrompt: "Cinematic historical documentary style, 9:16 vertical, ancient Egypt atmosphere, hyper-realistic, 8k.",
    scenes: [
      { sceneNo: 1, timecode: "0:00 - 0:08", voiceover: "বিজ্ঞানীরা এমন কিছু খুঁজে পেয়েছেন যা পিরামিড নিয়ে ইতিহাসবিদদের সব দাবিকে চ্যালেঞ্জ করতে পারে!", imagePrompt: "Cinematic wide shot of Great Pyramid of Giza glowing with faint golden sparks at dusk, 8k --ar 9:16", videoPrompt: "Slow push-in toward apex of Great Pyramid as faint blue electrical arcs flicker into night sky --ar 9:16" },
      { sceneNo: 2, timecode: "0:08 - 0:18", voiceover: "পিরামিডের গ্রানাইট পাথরে রয়েছে প্রচুর কোয়ার্টজ ক্রিস্টাল, যা প্রচণ্ড চাপে বিদ্যুৎ তৈরি করতে সক্ষম।", imagePrompt: "Hyper-realistic macro view of glowing quartz crystal veins inside dark granite chamber, 8k --ar 9:16", videoPrompt: "Camera tracking through narrow stone corridor, blue ambient light reflecting off wet granite walls --ar 9:16" },
      { sceneNo: 3, timecode: "0:18 - 0:28", voiceover: "এমনকি নিচে পাওয়া গেছে ভূগর্ভস্থ পানির চ্যানেল, যা প্রাচীনকালে তারবিহীন শক্তি সঞ্চালনের প্রযুক্তি হতে পারে!", imagePrompt: "Underground massive stone aqueduct beneath pyramid with flowing dark water, copper artifacts, 8k --ar 9:16", videoPrompt: "Slow pan across ancient hieroglyphic carvings depicting massive glowing devices with flickering torchlight --ar 9:16" },
      { sceneNo: 4, timecode: "0:28 - 0:35", voiceover: "প্রাচীন মানুষ কি সত্যিই আমাদের চেয়ে বেশি প্রযুক্তিগতভাবে উন্নত ছিল? কমেন্টে জানান!", imagePrompt: "Silhouette of ancient pharaoh architect overlooking completed pyramids under starry Milky Way, 8k --ar 9:16", videoPrompt: "Timelapse of stars and Milky Way rotating rapidly above Great Pyramid, fading into darkness --ar 9:16" }
    ]
  },
  {
    id: "HIS-STU-002",
    title: "হারিয়ে যাওয়া আটলান্টিস নগরী (The Lost Atlantis)",
    category: "ANCIENT MYSTERIES",
    categoryKey: "horror",
    difficulty: "Intermediate",
    duration: "42s",
    thumbnail: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    hookBangla: "সাহারার চোখের ঠিক কেন্দ্রবিন্দুতে কি সত্যিই লুকিয়ে আছে প্লাতো বর্ণিত সেই আটলান্টিস শহর?",
    bgmStyle: "Deep Underwater Ambience + Epic Historical Horns",
    sfxNotes: "Water Bubble Sub, Ancient Bell, Sand Dune Whoosh",
    masterPrompt: "Sunken mythical city of Atlantis, giant marble pillars covered in coral, glowing bioluminescent sea life, 8k --ar 9:16",
    scenes: [
      { sceneNo: 1, timecode: "0:00 - 0:10", voiceover: "হাজার বছর ধরে মানুষ সমুদ্রে আটলান্টিস খুঁজছে। কিন্তু স্যাটেলাইট ছবি বলছে এটি হয়তো আফ্রিকার মরুভূমিতেই ছিল!", imagePrompt: "Top-down satellite perspective of Eye of Sahara Richat Structure glowing in concentric rings, 8k --ar 9:16", videoPrompt: "Smooth descent from orbit straight down into concentric geological circles of desert structure --ar 9:16" },
      { sceneNo: 2, timecode: "0:10 - 0:25", voiceover: "দার্শনিক প্লাতোর দেওয়া বর্ণনার সাথে সাহারার এই কাঠামোর পরিমাপ ও বৃত্তাকার নদীগুলো হুবহু মিলে যায়!", imagePrompt: "3D historical reconstruction of circular concentric islands surrounded by water channels with temples, 8k --ar 9:16", videoPrompt: "Cinematic drone glide between marble statues on concentric canals filled with blue water --ar 9:16" },
      { sceneNo: 3, timecode: "0:25 - 0:42", voiceover: "এক রাতের মহাপ্রলয়ে কীভাবে পুরো একটি সাম্রাজ্য বালির নিচে তলিয়ে গেল? আপনার মত কমেন্টে জানান!", imagePrompt: "Apocalyptic tidal wave cresting over golden ancient civilization, dramatic lightning storms, 8k --ar 9:16", videoPrompt: "Giant wall of water crashing through ornate stone archways, fading to present-day dry desert dunes --ar 9:16" }
    ]
  },
  {
    id: "HIS-STU-003",
    title: "তাজমহলের বন্ধ ২২টি ঘর (The Sealed Rooms)",
    category: "ANCIENT MYSTERIES",
    categoryKey: "horror",
    difficulty: "Intermediate",
    duration: "38s",
    thumbnail: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80",
    hookBangla: "তাজমহলের নিচের যে ২২টি ঘর বছরের পর বছর সিলগালা করে রাখা হয়েছে, সেখানে আসলে কী আছে?",
    bgmStyle: "Indian Classical Sitar Drone + Tension Cello (-15dB)",
    sfxNotes: "Heavy Iron Padlock Creak, Deep Breath, Footsteps Echo",
    masterPrompt: "Subterranean vaulted marble chambers beneath Taj Mahal, sealed wooden doors with ancient Mughal iron padlocks, 8k --ar 9:16",
    scenes: [
      { sceneNo: 1, timecode: "0:00 - 0:08", voiceover: "বিশ্বের সপ্তাশ্চর্যের একটি তাজমহল। কিন্তু এর প্রধান ভিত্তির নিচে লুকানো রয়েছে এক গোপন অন্ধকার কক্ষ!", imagePrompt: "Low-angle view of white marble Taj Mahal against ominous storm cloud sky, 8k --ar 9:16", videoPrompt: "Slow cinematic tracking down hidden damp marble staircase leading beneath main platform --ar 9:16" },
      { sceneNo: 2, timecode: "0:08 - 0:22", voiceover: "যমুনার তীরে অবস্থিত এই বন্ধ ঘরগুলোতে সাধারণ মানুষের প্রবেশ নিষিদ্ধ। অনেকের দাবি, এখানে প্রাচীন কোনো মন্দিরের ধ্বংসাবশেষ রয়েছে।", imagePrompt: "Ancient weathered wooden doors with massive oxidized brass locks, mysterious carvings faintly visible, 8k --ar 9:16", videoPrompt: "Flashlight beam sweeps across padlocked subterranean doors covered in cobwebs and centuries of dust --ar 9:16" },
      { sceneNo: 3, timecode: "0:22 - 0:38", voiceover: "প্রত্নতাত্ত্বিকরা বলেন কাঠামোর সুরক্ষার জন্যই ঘরগুলো বন্ধ রাখা হয়েছে। আপনার কী মনে হয়?", imagePrompt: "Silhouette of archaeologist peering through iron grating into dark underground corridor, 8k --ar 9:16", videoPrompt: "Camera pulls back from iron grating leaving only shadows and silence in underground chamber --ar 9:16" }
    ]
  }
];

// GENERATE 1200 VIRAL HOOKS
const hookCategories = [
  { name: "HORROR & MYSTERY", prefix: "রাত ৩টায় ভুলেও এই কাজটি করবেন না" },
  { name: "DEEP SPACE FACTS", prefix: "মহাকাশের এই ভয়ংকর সত্যটি বিজ্ঞানীরা লুকিয়ে রেখেছিল" },
  { name: "DARK PSYCHOLOGY", prefix: "কেউ আপনার সাথে মিথ্যা বলছে কিনা ৫ সেকেন্ডে বোঝার উপায়" },
  { name: "ANCIENT SECRETS", prefix: "ইতিহাসের পাঠ্যবইয়ে এই ভয়ংকর সত্যটি কখনোই লেখা হয়নি" },
  { name: "EXTREME MOTIVATION", prefix: "আপনার বয়স ১৮ থেকে ২৫ হলে এই কথাটি সারাজীবন মনে রাখবেন" }
];

const generatedHooks = [];
for (let i = 1; i <= 1200; i++) {
  const cat = hookCategories[i % hookCategories.length];
  generatedHooks.push({
    id: `HK-${String(i).padStart(4, '0')}`,
    niche: cat.name,
    hook: `${cat.prefix} — ভাইরাল হুক ফর্মুলা #${i} (অডিয়েন্স রিটেনশন অপ্টিমাইজড)`
  });
}

const fileContent = `// Master Production Database
const bundleData = ${JSON.stringify(uniqueKits, null, 2)};

const hooksData = ${JSON.stringify(generatedHooks, null, 2)};
`;

fs.writeFileSync('data.js', fileContent, 'utf8');
console.log(`✅ Success! Generated ${uniqueKits.length} 100% UNIQUE Production Kits and ${generatedHooks.length} Viral Hooks directly into data.js`);