let harvardkyoto_list = (`
a A i I u U R lR  e E ai  o O au RR lRR
k kh g gh G
c ch j jh J
T Th D Dh N
t th d dh n _n
p ph b bh m
y r  _r l L
zh v S sh s h
~ M H ' oM K
n
`).split(/\s+/);


let harvardkyoto_tamil_list = (`
a A i I u U .R l.R  e E ai  o O au .R.R l.R.R
k kh g gh G
c ch j jh J
T Th D Dh N
t th d dh n .n
p ph b bh m
y r  R l L
zh v S sh s h
~ M H ' oM K
.N
`).split(/\s+/);


let harvardkyoto_expanded_list = (`

a A i I u U R lR e E ai o O au RR lRR

k kh g gh G c ch j jh J T Th D Dh N t th d dh n _n p ph b bh m y r _r l L zh v S sh s h

ka kA ki kI ku kU kR klR ke kE kai ko kO kau kRR klRR
kha khA khi khI khu khU khR khlR khe khE khai kho khO khau khRR khlRR
ga gA gi gI gu gU gR glR ge gE gai go gO gau gRR glRR
gha ghA ghi ghI ghu ghU ghR ghlR ghe ghE ghai gho ghO ghau ghRR ghlRR
Ga GA Gi GI Gu GU GR GlR Ge GE Gai Go GO Gau GRR GlRR
ca cA ci cI cu cU cR clR ce cE cai co cO cau cRR clRR
cha chA chi chI chu chU chR chlR che chE chai cho chO chau chRR chlRR
ja jA ji jI ju jU jR jlR je jE jai jo jO jau jRR jlRR
jha jhA jhi jhI jhu jhU jhR jhlR jhe jhE jhai jho jhO jhau jhRR jhlRR
Ja JA Ji JI Ju JU JR JlR Je JE Jai Jo JO Jau JRR JlRR
Ta TA Ti TI Tu TU TR TlR Te TE Tai To TO Tau TRR TlRR
Tha ThA Thi ThI Thu ThU ThR ThlR The ThE Thai Tho ThO Thau ThRR ThlRR
Da DA Di DI Du DU DR DlR De DE Dai Do DO Dau DRR DlRR
Dha DhA Dhi DhI Dhu DhU DhR DhlR Dhe DhE Dhai Dho DhO Dhau DhRR DhlRR
Na NA Ni NI Nu NU NR NlR Ne NE Nai No NO Nau NRR NlRR
ta tA ti tI tu tU tR tlR te tE tai to tO tau tRR tlRR
tha thA thi thI thu thU thR thlR the thE thai tho thO thau thRR thlRR
da dA di dI du dU dR dlR de dE dai do dO dau dRR dlRR
dha dhA dhi dhI dhu dhU dhR dhlR dhe dhE dhai dho dhO dhau dhRR dhlRR
na nA ni nI nu nU nR nlR ne nE nai no nO nau nRR nlRR
_na _nA _ni _nI _nu _nU _nR _nlR _ne _nE _nai _no _nO _nau _nRR _nlRR
pa pA pi pI pu pU pR plR pe pE pai po pO pau pRR plRR
pha phA phi phI phu phU phR phlR phe phE phai pho phO phau phRR phlRR
ba bA bi bI bu bU bR blR be bE bai bo bO bau bRR blRR
bha bhA bhi bhI bhu bhU bhR bhlR bhe bhE bhai bho bhO bhau bhRR bhlRR
ma mA mi mI mu mU mR mlR me mE mai mo mO mau mRR mlRR
ya yA yi yI yu yU yR ylR ye yE yai yo yO yau yRR ylRR
ra rA ri rI ru rU rR rlR re rE rai ro rO rau rRR rlRR
_ra _rA _ri _rI _ru _rU _rR _rlR _re _rE _rai _ro _rO _rau _rRR _rlRR
la lA li lI lu lU lR llR le lE lai lo lO lau lRR llRR
La LA Li LI Lu LU LR LlR Le LE Lai Lo LO Lau LRR LlRR
zha zhA zhi zhI zhu zhU zhR zhlR zhe zhE zhai zho zhO zhau zhRR zhlRR
va vA vi vI vu vU vR vlR ve vE vai vo vO vau vRR vlRR
Sa SA Si SI Su SU SR SlR Se SE Sai So SO Sau SRR SlRR
sha shA shi shI shu shU shR shlR she shE shai sho shO shau shRR shlRR
sa sA si sI su sU sR slR se sE sai so sO sau sRR slRR
ha hA hi hI hu hU hR hlR he hE hai ho hO hau hRR hlRR

~ M H ' oM K

`).split(/\s+/);


let sanskrit_expanded_list = (`
अ आ इ ई उ ऊ ऋ लृ ए ए ऐ ओ ओ औ ॠ लॄ

क् ख् ग् घ् ङ् च् छ् ज् झ् ञ् ट् ठ् ड् ढ् ण् त् थ् द् ध् न् न् प् फ् ब् भ् म् य् र् र् ल् ल् ल् व् श् ष् स् ह्

क का कि की कु कू कृ कॢ के के कै को को कौ कॄ कॣ
ख खा खि खी खु खू खृ खॢ खे खे खै खो खो खौ खॄ खॣ
ग गा गि गी गु गू गृ गॢ गे गे गै गो गो गौ गॄ गॣ
घ घा घि घी घु घू घृ घॢ घे घे घै घो घो घौ घॄ घॣ
ङ ङा ङि ङी ङु ङू ङृ ङॢ ङे ङे ङै ङो ङो ङौ ङॄ ङॣ
च चा चि ची चु चू चृ चॢ चे चे चै चो चो चौ चॄ चॣ
छ छा छि छी छु छू छृ छॢ छे छे छै छो छो छौ छॄ छॣ
ज जा जि जी जु जू जृ जॢ जे जे जै जो जो जौ जॄ जॣ
झ झा झि झी झु झू झृ झॢ झे झे झै झो झो झौ झॄ झॣ
ञ ञा ञि ञी ञु ञू ञृ ञॢ ञे ञे ञै ञो ञो ञौ ञॄ ञॣ
ट टा टि टी टु टू टृ टॢ टे टे टै टो टो टौ टॄ टॣ
ठ ठा ठि ठी ठु ठू ठृ ठॢ ठे ठे ठै ठो ठो ठौ ठॄ ठॣ
ड डा डि डी डु डू डृ डॢ डे डे डै डो डो डौ डॄ डॣ
ढ ढा ढि ढी ढु ढू ढृ ढॢ ढे ढे ढै ढो ढो ढौ ढॄ ढॣ
ण णा णि णी णु णू णृ णॢ णे णे णै णो णो णौ णॄ णॣ
त ता ति ती तु तू तृ तॢ ते ते तै तो तो तौ तॄ तॣ
थ था थि थी थु थू थृ थॢ थे थे थै थो थो थौ थॄ थॣ
द दा दि दी दु दू दृ दॢ दे दे दै दो दो दौ दॄ दॣ
ध धा धि धी धु धू धृ धॢ धे धे धै धो धो धौ धॄ धॣ
न ना नि नी नु नू नृ नॢ ने ने नै नो नो नौ नॄ नॣ
न ना नि नी नु नू नृ नॢ नॆ ने नै नॊ नो नौ नॄ नॣ
प पा पि पी पु पू पृ पॢ पे पे पै पो पो पौ पॄ पॣ
फ फा फि फी फु फू फृ फॢ फे फे फै फो फो फौ फॄ फॣ
ब बा बि बी बु बू बृ बॢ बे बे बै बो बो बौ बॄ बॣ
भ भा भि भी भु भू भृ भॢ भे भे भै भो भो भौ भॄ भॣ
म मा मि मी मु मू मृ मॢ मे मे मै मो मो मौ मॄ मॣ
य या यि यी यु यू यृ यॢ ये ये यै यो यो यौ यॄ यॣ
र रा रि री रु रू रृ रॢ रे रे रै रो रो रौ रॄ रॣ
र रा रि री रु रू रृ रॢ रॆ रे रै रॊ रो रौ रॄ रॣ
ल ला लि ली लु लू लृ लॢ ले ले लै लो लो लौ लॄ लॣ
ल ला लि ली लु लू लृ लॢ लॆ ले लै लॊ लो लौ लॄ लॣ
ल ला लि ली लु लू लृ लॢ लॆ ले लै लॊ लो लौ लॄ लॣ
व वा वि वी वु वू वृ वॢ वे वे वै वो वो वौ वॄ वॣ
श शा शि शी शु शू शृ शॢ शे शे शै शो शो शौ शॄ शॣ
ष षा षि षी षु षू षृ षॢ षे षे षै षो षो षौ षॄ षॣ
स सा सि सी सु सू सृ सॢ से से सै सो सो सौ सॄ सॣ
ह हा हि ही हु हू हृ हॢ हे हे है हो हो हौ हॄ हॣ

ँ ं ः ऽ ॐ ग्

`).split(/\s+/);


let telugu_expanded_list = (`
అ ఆ ఇ ఈ ఉ ఊ ఋ ఌ ఎ ఏ ఐ ఒ ఓ ఔ ౠ ౡ

క్ ఖ్ గ్ ఘ్ ఙ్ చ్ ఛ్ జ్ ఝ్ ఞ్ ట్ ఠ్ డ్ ఢ్ ణ్ త్ థ్ ద్ ధ్ న్ న్ ప్ ఫ్ బ్ భ్ మ్ య్ ర్ ఱ్ ల్ ళ్ ఴ్ వ్ శ్ ష్ స్ హ్

క కా కి కీ కు కూ కృ కౢ కె కే కై కొ కో కౌ కౄ కౣ
ఖ ఖా ఖి ఖీ ఖు ఖూ ఖృ ఖౢ ఖె ఖే ఖై ఖొ ఖో ఖౌ ఖౄ ఖౣ
గ గా గి గీ గు గూ గృ గౢ గె గే గై గొ గో గౌ గౄ గౣ
ఘ ఘా ఘి ఘీ ఘు ఘూ ఘృ ఘౢ ఘె ఘే ఘై ఘొ ఘో ఘౌ ఘౄ ఘౣ
ఙ ఙా ఙి ఙీ ఙు ఙూ ఙృ ఙౢ ఙె ఙే ఙై ఙొ ఙో ఙౌ ఙౄ ఙౣ
చ చా చి చీ చు చూ చృ చౢ చె చే చై చొ చో చౌ చౄ చౣ
ఛ ఛా ఛి ఛీ ఛు ఛూ ఛృ ఛౢ ఛె ఛే ఛై ఛొ ఛో ఛౌ ఛౄ ఛౣ
జ జా జి జీ జు జూ జృ జౢ జె జే జై జొ జో జౌ జౄ జౣ
ఝ ఝా ఝి ఝీ ఝు ఝూ ఝృ ఝౢ ఝె ఝే ఝై ఝొ ఝో ఝౌ ఝౄ ఝౣ
ఞ ఞా ఞి ఞీ ఞు ఞూ ఞృ ఞౢ ఞె ఞే ఞై ఞొ ఞో ఞౌ ఞౄ ఞౣ
ట టా టి టీ టు టూ టృ టౢ టె టే టై టొ టో టౌ టౄ టౣ
ఠ ఠా ఠి ఠీ ఠు ఠూ ఠృ ఠౢ ఠె ఠే ఠై ఠొ ఠో ఠౌ ఠౄ ఠౣ
డ డా డి డీ డు డూ డృ డౢ డె డే డై డొ డో డౌ డౄ డౣ
ఢ ఢా ఢి ఢీ ఢు ఢూ ఢృ ఢౢ ఢె ఢే ఢై ఢొ ఢో ఢౌ ఢౄ ఢౣ
ణ ణా ణి ణీ ణు ణూ ణృ ణౢ ణె ణే ణై ణొ ణో ణౌ ణౄ ణౣ
త తా తి తీ తు తూ తృ తౢ తె తే తై తొ తో తౌ తౄ తౣ
థ థా థి థీ థు థూ థృ థౢ థె థే థై థొ థో థౌ థౄ థౣ
ద దా ది దీ దు దూ దృ దౢ దె దే దై దొ దో దౌ దౄ దౣ
ధ ధా ధి ధీ ధు ధూ ధృ ధౢ ధె ధే ధై ధొ ధో ధౌ ధౄ ధౣ
న నా ని నీ ను నూ నృ నౢ నె నే నై నొ నో నౌ నౄ నౣ
న నా ని నీ ను నూ నృ నౢ నె నే నై నొ నో నౌ నౄ నౣ
ప పా పి పీ పు పూ పృ పౢ పె పే పై పొ పో పౌ పౄ పౣ
ఫ ఫా ఫి ఫీ ఫు ఫూ ఫృ ఫౢ ఫె ఫే ఫై ఫొ ఫో ఫౌ ఫౄ ఫౣ
బ బా బి బీ బు బూ బృ బౢ బె బే బై బొ బో బౌ బౄ బౣ
భ భా భి భీ భు భూ భృ భౢ భె భే భై భొ భో భౌ భౄ భౣ
మ మా మి మీ ము మూ మృ మౢ మె మే మై మొ మో మౌ మౄ మౣ
య యా యి యీ యు యూ యృ యౢ యె యే యై యొ యో యౌ యౄ యౣ
ర రా రి రీ రు రూ రృ రౢ రె రే రై రొ రో రౌ రౄ రౣ
ఱ ఱా ఱి ఱీ ఱు ఱూ ఱృ ఱౢ ఱె ఱే ఱై ఱొ ఱో ఱౌ ఱౄ ఱౣ
ల లా లి లీ లు లూ ఌ లౢ లె లే లై లొ లో లౌ ౡ లౣ
ళ ళా ళి ళీ ళు ళూ ళృ ళౢ ళె ళే ళై ళొ ళో ళౌ ళౄ ళౣ
ఴ ఴా ఴి ఴీ ఴు ఴూ ఴృ ఴౢ ఴె ఴే ఴై ఴొ ఴో ఴౌ ఴౄ ఴౣ
వ వా వి వీ వు వూ వృ వౢ వె వే వై వొ వో వౌ వౄ వౣ
శ శా శి శీ శు శూ శృ శౢ శె శే శై శొ శో శౌ శౄ శౣ
ష షా షి షీ షు షూ షృ షౢ షె షే షై షొ షో షౌ షౄ షౣ
స సా సి సీ సు సూ సృ సౢ సె సే సై సొ సో సౌ సౄ సౣ
హ హా హి హీ హు హూ హృ హౢ హె హే హై హొ హో హౌ హౄ హౣ

ఁ ం ః ఽ ఓమ్ గ్

`).split(/\s+/);


let kannada_expanded_list = (`
ಅ ಆ ಇ ಈ ಉ ಊ ಋ ಌ ಎ ಏ ಐ ಒ ಓ ಔ ೠ ೡ

ಕ್ ಖ್ ಗ್ ಘ್ ಙ್ ಚ್ ಛ್ ಜ್ ಝ್ ಞ್ ಟ್ ಠ್ ಡ್ ಢ್ ಣ್ ತ್ ಥ್ ದ್ ಧ್ ನ್ ನ್ ಪ್ ಫ್ ಬ್ ಭ್ ಮ್ ಯ್ ರ್ ಱ್ ಲ್ ಳ್ ಳ್ ವ್ ಶ್ ಷ್ ಸ್ ಹ್

ಕ ಕಾ ಕಿ ಕೀ ಕು ಕೂ ಕೃ ಕೢ ಕೆ ಕೇ ಕೈ ಕೊ ಕೋ ಕೌ ಕೄ ಕೣ
ಖ ಖಾ ಖಿ ಖೀ ಖು ಖೂ ಖೃ ಖೢ ಖೆ ಖೇ ಖೈ ಖೊ ಖೋ ಖೌ ಖೄ ಖೣ
ಗ ಗಾ ಗಿ ಗೀ ಗು ಗೂ ಗೃ ಗೢ ಗೆ ಗೇ ಗೈ ಗೊ ಗೋ ಗೌ ಗೄ ಗೣ
ಘ ಘಾ ಘಿ ಘೀ ಘು ಘೂ ಘೃ ಘೢ ಘೆ ಘೇ ಘೈ ಘೊ ಘೋ ಘೌ ಘೄ ಘೣ
ಙ ಙಾ ಙಿ ಙೀ ಙು ಙೂ ಙೃ ಙೢ ಙೆ ಙೇ ಙೈ ಙೊ ಙೋ ಙೌ ಙೄ ಙೣ
ಚ ಚಾ ಚಿ ಚೀ ಚು ಚೂ ಚೃ ಚೢ ಚೆ ಚೇ ಚೈ ಚೊ ಚೋ ಚೌ ಚೄ ಚೣ
ಛ ಛಾ ಛಿ ಛೀ ಛು ಛೂ ಛೃ ಛೢ ಛೆ ಛೇ ಛೈ ಛೊ ಛೋ ಛೌ ಛೄ ಛೣ
ಜ ಜಾ ಜಿ ಜೀ ಜು ಜೂ ಜೃ ಜೢ ಜೆ ಜೇ ಜೈ ಜೊ ಜೋ ಜೌ ಜೄ ಜೣ
ಝ ಝಾ ಝಿ ಝೀ ಝು ಝೂ ಝೃ ಝೢ ಝೆ ಝೇ ಝೈ ಝೊ ಝೋ ಝೌ ಝೄ ಝೣ
ಞ ಞಾ ಞಿ ಞೀ ಞು ಞೂ ಞೃ ಞೢ ಞೆ ಞೇ ಞೈ ಞೊ ಞೋ ಞೌ ಞೄ ಞೣ
ಟ ಟಾ ಟಿ ಟೀ ಟು ಟೂ ಟೃ ಟೢ ಟೆ ಟೇ ಟೈ ಟೊ ಟೋ ಟೌ ಟೄ ಟೣ
ಠ ಠಾ ಠಿ ಠೀ ಠು ಠೂ ಠೃ ಠೢ ಠೆ ಠೇ ಠೈ ಠೊ ಠೋ ಠೌ ಠೄ ಠೣ
ಡ ಡಾ ಡಿ ಡೀ ಡು ಡೂ ಡೃ ಡೢ ಡೆ ಡೇ ಡೈ ಡೊ ಡೋ ಡೌ ಡೄ ಡೣ
ಢ ಢಾ ಢಿ ಢೀ ಢು ಢೂ ಢೃ ಢೢ ಢೆ ಢೇ ಢೈ ಢೊ ಢೋ ಢೌ ಢೄ ಢೣ
ಣ ಣಾ ಣಿ ಣೀ ಣು ಣೂ ಣೃ ಣೢ ಣೆ ಣೇ ಣೈ ಣೊ ಣೋ ಣೌ ಣೄ ಣೣ
ತ ತಾ ತಿ ತೀ ತು ತೂ ತೃ ತೢ ತೆ ತೇ ತೈ ತೊ ತೋ ತೌ ತೄ ತೣ
ಥ ಥಾ ಥಿ ಥೀ ಥು ಥೂ ಥೃ ಥೢ ಥೆ ಥೇ ಥೈ ಥೊ ಥೋ ಥೌ ಥೄ ಥೣ
ದ ದಾ ದಿ ದೀ ದು ದೂ ದೃ ದೢ ದೆ ದೇ ದೈ ದೊ ದೋ ದೌ ದೄ ದೣ
ಧ ಧಾ ಧಿ ಧೀ ಧು ಧೂ ಧೃ ಧೢ ಧೆ ಧೇ ಧೈ ಧೊ ಧೋ ಧೌ ಧೄ ಧೣ
ನ ನಾ ನಿ ನೀ ನು ನೂ ನೃ ನೢ ನೆ ನೇ ನೈ ನೊ ನೋ ನೌ ನೄ ನೣ
ನ ನಾ ನಿ ನೀ ನು ನೂ ನೃ ನೢ ನೆ ನೇ ನೈ ನೊ ನೋ ನೌ ನೄ ನೣ
ಪ ಪಾ ಪಿ ಪೀ ಪು ಪೂ ಪೃ ಪೢ ಪೆ ಪೇ ಪೈ ಪೊ ಪೋ ಪೌ ಪೄ ಪೣ
ಫ ಫಾ ಫಿ ಫೀ ಫು ಫೂ ಫೃ ಫೢ ಫೆ ಫೇ ಫೈ ಫೊ ಫೋ ಫೌ ಫೄ ಫೣ
ಬ ಬಾ ಬಿ ಬೀ ಬು ಬೂ ಬೃ ಬೢ ಬೆ ಬೇ ಬೈ ಬೊ ಬೋ ಬೌ ಬೄ ಬೣ
ಭ ಭಾ ಭಿ ಭೀ ಭು ಭೂ ಭೃ ಭೢ ಭೆ ಭೇ ಭೈ ಭೊ ಭೋ ಭೌ ಭೄ ಭೣ
ಮ ಮಾ ಮಿ ಮೀ ಮು ಮೂ ಮೃ ಮೢ ಮೆ ಮೇ ಮೈ ಮೊ ಮೋ ಮೌ ಮೄ ಮೣ
ಯ ಯಾ ಯಿ ಯೀ ಯು ಯೂ ಯೃ ಯೢ ಯೆ ಯೇ ಯೈ ಯೊ ಯೋ ಯೌ ಯೄ ಯೣ
ರ ರಾ ರಿ ರೀ ರು ರೂ ರೃ ರೢ ರೆ ರೇ ರೈ ರೊ ರೋ ರೌ ರೄ ರೣ
ಱ ಱಾ ಱಿ ಱೀ ಱು ಱೂ ಱೃ ಱೢ ಱೆ ಱೇ ಱೈ ಱೊ ಱೋ ಱೌ ಱೄ ಱೣ
ಲ ಲಾ ಲಿ ಲೀ ಲು ಲೂ ಌ ಲೢ ಲೆ ಲೇ ಲೈ ಲೊ ಲೋ ಲೌ ೡ ಲೣ
ಳ ಳಾ ಳಿ ಳೀ ಳು ಳೂ ಳೃ ಳೢ ಳೆ ಳೇ ಳೈ ಳೊ ಳೋ ಳೌ ಳೄ ಳೣ
ಳ ಳಾ ಳಿ ಳೀ ಳು ಳೂ ಳೃ ಳೢ ಳೆ ಳೇ ಳೈ ಳೊ ಳೋ ಳೌ ಳೄ ಳೣ
ವ ವಾ ವಿ ವೀ ವು ವೂ ವೃ ವೢ ವೆ ವೇ ವೈ ವೊ ವೋ ವೌ ವೄ ವೣ
ಶ ಶಾ ಶಿ ಶೀ ಶು ಶೂ ಶೃ ಶೢ ಶೆ ಶೇ ಶೈ ಶೊ ಶೋ ಶೌ ಶೄ ಶೣ
ಷ ಷಾ ಷಿ ಷೀ ಷು ಷೂ ಷೃ ಷೢ ಷೆ ಷೇ ಷೈ ಷೊ ಷೋ ಷೌ ಷೄ ಷೣ
ಸ ಸಾ ಸಿ ಸೀ ಸು ಸೂ ಸೃ ಸೢ ಸೆ ಸೇ ಸೈ ಸೊ ಸೋ ಸೌ ಸೄ ಸೣ
ಹ ಹಾ ಹಿ ಹೀ ಹು ಹೂ ಹೃ ಹೢ ಹೆ ಹೇ ಹೈ ಹೊ ಹೋ ಹೌ ಹೄ ಹೣ

ಂ ಂ ಃ ಽ ಓಮ್ ಗ್

`).split(/\s+/);


let malayalam_expanded_list = (`
അ ആ ഇ ഈ ഉ ഊ ഋ ഌ എ ഏ ഐ ഒ ഓ ഔ ൠ ൡ

ക് ഖ് ഗ് ഘ് ങ് ച് ഛ് ജ് ഝ് ഞ് ട് ഠ് ഡ് ഢ് ണ് ത് ഥ് ദ് ധ് ന് ന് പ് ഫ് ബ് ഭ് മ് യ് ര് റ് ല് ള് ഴ് വ് ശ് ഷ് സ് ഹ്

ക കാ കി കീ കു കൂ കൃ കൢ കെ കേ കൈ കൊ കോ കൌ കൄ കൣ
ഖ ഖാ ഖി ഖീ ഖു ഖൂ ഖൃ ഖൢ ഖെ ഖേ ഖൈ ഖൊ ഖോ ഖൌ ഖൄ ഖൣ
ഗ ഗാ ഗി ഗീ ഗു ഗൂ ഗൃ ഗൢ ഗെ ഗേ ഗൈ ഗൊ ഗോ ഗൌ ഗൄ ഗൣ
ഘ ഘാ ഘി ഘീ ഘു ഘൂ ഘൃ ഘൢ ഘെ ഘേ ഘൈ ഘൊ ഘോ ഘൌ ഘൄ ഘൣ
ങ ങാ ങി ങീ ങു ങൂ ങൃ ങൢ ങെ ങേ ങൈ ങൊ ങോ ങൌ ങൄ ങൣ
ച ചാ ചി ചീ ചു ചൂ ചൃ ചൢ ചെ ചേ ചൈ ചൊ ചോ ചൌ ചൄ ചൣ
ഛ ഛാ ഛി ഛീ ഛു ഛൂ ഛൃ ഛൢ ഛെ ഛേ ഛൈ ഛൊ ഛോ ഛൌ ഛൄ ഛൣ
ജ ജാ ജി ജീ ജു ജൂ ജൃ ജൢ ജെ ജേ ജൈ ജൊ ജോ ജൌ ജൄ ജൣ
ഝ ഝാ ഝി ഝീ ഝു ഝൂ ഝൃ ഝൢ ഝെ ഝേ ഝൈ ഝൊ ഝോ ഝൌ ഝൄ ഝൣ
ഞ ഞാ ഞി ഞീ ഞു ഞൂ ഞൃ ഞൢ ഞെ ഞേ ഞൈ ഞൊ ഞോ ഞൌ ഞൄ ഞൣ
ട ടാ ടി ടീ ടു ടൂ ടൃ ടൢ ടെ ടേ ടൈ ടൊ ടോ ടൌ ടൄ ടൣ
ഠ ഠാ ഠി ഠീ ഠു ഠൂ ഠൃ ഠൢ ഠെ ഠേ ഠൈ ഠൊ ഠോ ഠൌ ഠൄ ഠൣ
ഡ ഡാ ഡി ഡീ ഡു ഡൂ ഡൃ ഡൢ ഡെ ഡേ ഡൈ ഡൊ ഡോ ഡൌ ഡൄ ഡൣ
ഢ ഢാ ഢി ഢീ ഢു ഢൂ ഢൃ ഢൢ ഢെ ഢേ ഢൈ ഢൊ ഢോ ഢൌ ഢൄ ഢൣ
ണ ണാ ണി ണീ ണു ണൂ ണൃ ണൢ ണെ ണേ ണൈ ണൊ ണോ ണൌ ണൄ ണൣ
ത താ തി തീ തു തൂ തൃ തൢ തെ തേ തൈ തൊ തോ തൌ തൄ തൣ
ഥ ഥാ ഥി ഥീ ഥു ഥൂ ഥൃ ഥൢ ഥെ ഥേ ഥൈ ഥൊ ഥോ ഥൌ ഥൄ ഥൣ
ദ ദാ ദി ദീ ദു ദൂ ദൃ ദൢ ദെ ദേ ദൈ ദൊ ദോ ദൌ ദൄ ദൣ
ധ ധാ ധി ധീ ധു ധൂ ധൃ ധൢ ധെ ധേ ധൈ ധൊ ധോ ധൌ ധൄ ധൣ
ന നാ നി നീ നു നൂ നൃ നൢ നെ നേ നൈ നൊ നോ നൌ നൄ നൣ
ന നാ നി നീ നു നൂ നൃ നൢ നെ നേ നൈ നൊ നോ നൌ നൄ നൣ
പ പാ പി പീ പു പൂ പൃ പൢ പെ പേ പൈ പൊ പോ പൌ പൄ പൣ
ഫ ഫാ ഫി ഫീ ഫു ഫൂ ഫൃ ഫൢ ഫെ ഫേ ഫൈ ഫൊ ഫോ ഫൌ ഫൄ ഫൣ
ബ ബാ ബി ബീ ബു ബൂ ബൃ ബൢ ബെ ബേ ബൈ ബൊ ബോ ബൌ ബൄ ബൣ
ഭ ഭാ ഭി ഭീ ഭു ഭൂ ഭൃ ഭൢ ഭെ ഭേ ഭൈ ഭൊ ഭോ ഭൌ ഭൄ ഭൣ
മ മാ മി മീ മു മൂ മൃ മൢ മെ മേ മൈ മൊ മോ മൌ മൄ മൣ
യ യാ യി യീ യു യൂ യൃ യൢ യെ യേ യൈ യൊ യോ യൌ യൄ യൣ
ര രാ രി രീ രു രൂ രൃ രൢ രെ രേ രൈ രൊ രോ രൌ രൄ രൣ
റ റാ റി റീ റു റൂ റൃ റൢ റെ റേ റൈ റൊ റോ റൌ റൄ റൣ
ല ലാ ലി ലീ ലു ലൂ ഌ ലൢ ലെ ലേ ലൈ ലൊ ലോ ലൌ ൡ ലൣ
ള ളാ ളി ളീ ളു ളൂ ളൃ ളൢ ളെ ളേ ളൈ ളൊ ളോ ളൌ ളൄ ളൣ
ഴ ഴാ ഴി ഴീ ഴു ഴൂ ഴൃ ഴൢ ഴെ ഴേ ഴൈ ഴൊ ഴോ ഴൌ ഴൄ ഴൣ
വ വാ വി വീ വു വൂ വൃ വൢ വെ വേ വൈ വൊ വോ വൌ വൄ വൣ
ശ ശാ ശി ശീ ശു ശൂ ശൃ ശൢ ശെ ശേ ശൈ ശൊ ശോ ശൌ ശൄ ശൣ
ഷ ഷാ ഷി ഷീ ഷു ഷൂ ഷൃ ഷൢ ഷെ ഷേ ഷൈ ഷൊ ഷോ ഷൌ ഷൄ ഷൣ
സ സാ സി സീ സു സൂ സൃ സൢ സെ സേ സൈ സൊ സോ സൌ സൄ സൣ
ഹ ഹാ ഹി ഹീ ഹു ഹൂ ഹൃ ഹൢ ഹെ ഹേ ഹൈ ഹൊ ഹോ ഹൌ ഹൄ ഹൣ

ം ം ഃ ഽ ഓമ് ഗ്

`).split(/\s+/);


let tamil_expanded_list = (`
அ ஆ இ ஈ உ ஊ ரு லு எ ஏ ஐ ஒ ஓ ஔ ரூ லூ

க் க் க் க் ங் ச் ச் ஜ் ஜ் ஞ் ட் ட் ட் ட் ண் த் த் த் த் ந் ன் ப் ப் ப் ப் ம் ய் ர் ற் ல் ள் ழ் வ் ஶ் ஷ் ஸ் ஹ்

க கா கி கீ கு கூ க்ரு க்லு கெ கே கை கொ கோ கௌ க்ரூ க்லூ
க கா கி கீ கு கூ க்ரு க்லு கெ கே கை கொ கோ கௌ க்ரூ க்லூ
க கா கி கீ கு கூ க்ரு க்லு கெ கே கை கொ கோ கௌ க்ரூ க்லூ
க கா கி கீ கு கூ க்ரு க்லு கெ கே கை கொ கோ கௌ க்ரூ க்லூ
ங ஙா ஙி ஙீ ஙு ஙூ ங்ரு ங்லு ஙெ ஙே ஙை ஙொ ஙோ ஙௌ ங்ரூ ங்லூ
ச சா சி சீ சு சூ ச்ரு ச்லு செ சே சை சொ சோ சௌ ச்ரூ ச்லூ
ச சா சி சீ சு சூ ச்ரு ச்லு செ சே சை சொ சோ சௌ ச்ரூ ச்லூ
ஜ ஜா ஜி ஜீ ஜு ஜூ ஜ்ரு ஜ்லு ஜெ ஜே ஜை ஜொ ஜோ ஜௌ ஜ்ரூ ஜ்லூ
ஜ ஜா ஜி ஜீ ஜு ஜூ ஜ்ரு ஜ்லு ஜெ ஜே ஜை ஜொ ஜோ ஜௌ ஜ்ரூ ஜ்லூ
ஞ ஞா ஞி ஞீ ஞு ஞூ ஞ்ரு ஞ்லு ஞெ ஞே ஞை ஞொ ஞோ ஞௌ ஞ்ரூ ஞ்லூ
ட டா டி டீ டு டூ ட்ரு ட்லு டெ டே டை டொ டோ டௌ ட்ரூ ட்லூ
ட டா டி டீ டு டூ ட்ரு ட்லு டெ டே டை டொ டோ டௌ ட்ரூ ட்லூ
ட டா டி டீ டு டூ ட்ரு ட்லு டெ டே டை டொ டோ டௌ ட்ரூ ட்லூ
ட டா டி டீ டு டூ ட்ரு ட்லு டெ டே டை டொ டோ டௌ ட்ரூ ட்லூ
ண ணா ணி ணீ ணு ணூ ண்ரு ண்லு ணெ ணே ணை ணொ ணோ ணௌ ண்ரூ ண்லூ
த தா தி தீ து தூ த்ரு த்லு தெ தே தை தொ தோ தௌ த்ரூ த்லூ
த தா தி தீ து தூ த்ரு த்லு தெ தே தை தொ தோ தௌ த்ரூ த்லூ
த தா தி தீ து தூ த்ரு த்லு தெ தே தை தொ தோ தௌ த்ரூ த்லூ
த தா தி தீ து தூ த்ரு த்லு தெ தே தை தொ தோ தௌ த்ரூ த்லூ
ந நா நி நீ நு நூ ந்ரு ந்லு நெ நே நை நொ நோ நௌ ந்ரூ ந்லூ
ன னா னி னீ னு னூ ன்ரு ன்லு னெ னே னை னொ னோ னௌ ன்ரூ ன்லூ
ப பா பி பீ பு பூ ப்ரு ப்லு பெ பே பை பொ போ பௌ ப்ரூ ப்லூ
ப பா பி பீ பு பூ ப்ரு ப்லு பெ பே பை பொ போ பௌ ப்ரூ ப்லூ
ப பா பி பீ பு பூ ப்ரு ப்லு பெ பே பை பொ போ பௌ ப்ரூ ப்லூ
ப பா பி பீ பு பூ ப்ரு ப்லு பெ பே பை பொ போ பௌ ப்ரூ ப்லூ
ம மா மி மீ மு மூ ம்ரு ம்லு மெ மே மை மொ மோ மௌ ம்ரூ ம்லூ
ய யா யி யீ யு யூ ய்ரு ய்லு யெ யே யை யொ யோ யௌ ய்ரூ ய்லூ
ர ரா ரி ரீ ரு ரூ ர்ரு ர்லு ரெ ரே ரை ரொ ரோ ரௌ ர்ரூ ர்லூ
ற றா றி றீ று றூ ற்ரு ற்லு றெ றே றை றொ றோ றௌ ற்ரூ ற்லூ
ல லா லி லீ லு லூ லு ல்லு லெ லே லை லொ லோ லௌ லூ ல்லூ
ள ளா ளி ளீ ளு ளூ ள்ரு ள்லு ளெ ளே ளை ளொ ளோ ளௌ ள்ரூ ள்லூ
ழ ழா ழி ழீ ழு ழூ ழ்ரு ழ்லு ழெ ழே ழை ழொ ழோ ழௌ ழ்ரூ ழ்லூ
வ வா வி வீ வு வூ வ்ரு வ்லு வெ வே வை வொ வோ வௌ வ்ரூ வ்லூ
ச சா சி சீ சு சூ ச்ரு ச்லு செ சே சை சொ சோ சௌ ச்ரூ ச்லூ
ஷ ஷா ஷி ஷீ ஷு ஷூ ஷ்ரு ஷ்லு ஷெ ஷே ஷை ஷொ ஷோ ஷௌ ஷ்ரூ ஷ்லூ
ச சா சி சீ சு சூ ச்ரு ச்லு செ சே சை சொ சோ சௌ ச்ரூ ச்லூ
ஹ ஹா ஹி ஹீ ஹு ஹூ ஹ்ரு ஹ்லு ஹெ ஹே ஹை ஹொ ஹோ ஹௌ ஹ்ரூ ஹ்லூ

ம் ம் ஹ ' ௐ ஃ
`).split(/\s+/);


let harvardkyoto_tamil_expanded_list = (`
a A i I u U .R l.R e E ai o O au .R.R l.R.R

k kh g gh G c ch j jh J T Th D Dh N t th d dh n .n p ph b bh m y r R l L zh v S sh s h

ka kA ki kI ku kU k.R kl.R ke kE kai ko kO kau k.R.R kl.R.R
kha khA khi khI khu khU kh.R khl.R khe khE khai kho khO khau kh.R.R khl.R.R
ga gA gi gI gu gU g.R gl.R ge gE gai go gO gau g.R.R gl.R.R
gha ghA ghi ghI ghu ghU gh.R ghl.R ghe ghE ghai gho ghO ghau gh.R.R ghl.R.R
Ga GA Gi GI Gu GU G.R Gl.R Ge GE Gai Go GO Gau G.R.R Gl.R.R
ca cA ci cI cu cU c.R cl.R ce cE cai co cO cau c.R.R cl.R.R
cha chA chi chI chu chU ch.R chl.R che chE chai cho chO chau ch.R.R chl.R.R
ja jA ji jI ju jU j.R jl.R je jE jai jo jO jau j.R.R jl.R.R
jha jhA jhi jhI jhu jhU jh.R jhl.R jhe jhE jhai jho jhO jhau jh.R.R jhl.R.R
Ja JA Ji JI Ju JU J.R Jl.R Je JE Jai Jo JO Jau J.R.R Jl.R.R
Ta TA Ti TI Tu TU T.R Tl.R Te TE Tai To TO Tau T.R.R Tl.R.R
Tha ThA Thi ThI Thu ThU Th.R Thl.R The ThE Thai Tho ThO Thau Th.R.R Thl.R.R
Da DA Di DI Du DU D.R Dl.R De DE Dai Do DO Dau D.R.R Dl.R.R
Dha DhA Dhi DhI Dhu DhU Dh.R Dhl.R Dhe DhE Dhai Dho DhO Dhau Dh.R.R Dhl.R.R
Na NA Ni NI Nu NU N.R Nl.R Ne NE Nai No NO Nau N.R.R Nl.R.R
ta tA ti tI tu tU t.R tl.R te tE tai to tO tau t.R.R tl.R.R
tha thA thi thI thu thU th.R thl.R the thE thai tho thO thau th.R.R thl.R.R
da dA di dI du dU d.R dl.R de dE dai do dO dau d.R.R dl.R.R
dha dhA dhi dhI dhu dhU dh.R dhl.R dhe dhE dhai dho dhO dhau dh.R.R dhl.R.R
na nA ni nI nu nU n.R nl.R ne nE nai no nO nau n.R.R nl.R.R
.na .nA .ni .nI .nu .nU .n.R .nl.R .ne .nE .nai .no .nO .nau .n.R.R .nl.R.R
pa pA pi pI pu pU p.R pl.R pe pE pai po pO pau p.R.R pl.R.R
pha phA phi phI phu phU ph.R phl.R phe phE phai pho phO phau ph.R.R phl.R.R
ba bA bi bI bu bU b.R bl.R be bE bai bo bO bau b.R.R bl.R.R
bha bhA bhi bhI bhu bhU bh.R bhl.R bhe bhE bhai bho bhO bhau bh.R.R bhl.R.R
ma mA mi mI mu mU m.R ml.R me mE mai mo mO mau m.R.R ml.R.R
ya yA yi yI yu yU y.R yl.R ye yE yai yo yO yau y.R.R yl.R.R
ra rA ri rI ru rU r.R rl.R re rE rai ro rO rau r.R.R rl.R.R
Ra RA Ri RI Ru RU R.R Rl.R Re RE Rai Ro RO Rau R.R.R Rl.R.R
la lA li lI lu lU l.R ll.R le lE lai lo lO lau l.R.R ll.R.R
La LA Li LI Lu LU L.R Ll.R Le LE Lai Lo LO Lau L.R.R Ll.R.R
zha zhA zhi zhI zhu zhU zh.R zhl.R zhe zhE zhai zho zhO zhau zh.R.R zhl.R.R
va vA vi vI vu vU v.R vl.R ve vE vai vo vO vau v.R.R vl.R.R
Sa SA Si SI Su SU S.R Sl.R Se SE Sai So SO Sau S.R.R Sl.R.R
sha shA shi shI shu shU sh.R shl.R she shE shai sho shO shau sh.R.R shl.R.R
sa sA si sI su sU s.R sl.R se sE sai so sO sau s.R.R sl.R.R
ha hA hi hI hu hU h.R hl.R he hE hai ho hO hau h.R.R hl.R.R

~ M H ' oM K
`).split(/\s+/);


const MAP_LANG_DICT = { 'English' : 'English', 'हिंदी' : 'Hindi', 'ಕನ್ನಡ' : 'Kannada', 'தமிழ்' : 'Tamil', 'తెలుగు' : 'Telugu', 'മലയാളം' : 'Malayalam' }
const MAP_ISO_DICT = { 'English' : 'en-IN', 'Hindi' : 'hi-IN', 'Kannada' : 'kn-IN', 'Tamil' : 'ta-IN', 'Telugu' : 'te-IN', 'Malayalam' : 'ml-IN' }

const MAP_INFO_DICT = { 'Tamil' : { 'Raga' : 'ராகம்', 'Artist' : 'கலைஞர்', 'Composer' : 'கவிஞர்', 'Type' : 'வகை', 'Song' : 'பாடல்', 'About' : 'பற்றி', 'Search' : 'தேடு', 'Playlist' : 'பிளேலிஸ்ட்', 'References' : 'குறிப்புகள்', 'Born' : 'பிறப்பு', 'Died' : 'இறப்பு', 'Thaat' : 'தாட்', 'Arohanam' : 'ஆரோகணம்', 'Avarohanam' : 'அவரோகணம்', 'Tala' : 'தாளம்', 'Tala name' : 'தாள பெயர்', 'Tala angas' : 'தாள அங்கங்கள்', 'Tala count' : 'தாள எண்ணிக்கை', 'Language' :'மொழி', 'God' : 'இறைவன்', 'English' : 'ஆங்கிலம்', 'Tamil' : 'தமிழ்', 'Telugu' : 'தெலுங்கு', 'Kannada' : 'கன்னடா', 'Malayalam' : 'மலையாளம்', 'Hindi' : 'இந்தி', 'Videos' : 'வீடியோக்கள்', 'Ragas' : 'ராகங்கள்', 'Artists' : 'கலைஞர்கள்', 'Composers' : 'கவிஞர்கள்', 'Types' : 'வகைகள்', 'Songs' : 'பாடல்கள்', 'Duration' : 'காலம்', 'Views' : 'பார்வைகள்', 'Updated' : 'புதுப்பிக்கப்பட்டது', 'Search Results' : 'தேடல் முடிவுகள்' },
                  'Telugu' : { 'Raga' : 'రాగం', 'Artist' : 'కళాకారుడు', 'Composer' : 'కవి', 'Type' : 'రకము', 'Song' : 'పాట', 'About' : 'గురించి', 'Search' : 'వెతకండి', 'Playlist' : 'ప్లేలిస్ట్', 'References' : 'ప్రస్తావనలు', 'Born' : 'జననం', 'Died' : 'మరణం', 'Thaat' : 'థాట్', 'Arohanam' : 'ఆరోహణ', 'Avarohanam' : 'అవరోహణ', 'Tala' : 'తాలా', 'Tala name' : 'తాలా పేరు', 'Tala angas' : 'తాలా అంగస్', 'Tala count' : 'తాలా లెక్కింపు ', 'Language' :'భాష', 'God' : 'దేవుడు', 'English' : 'ఆంగ్లం', 'Tamil' : 'తమిళం', 'Telugu' : 'తెలుగు', 'Kannada' : 'కన్నడ', 'Malayalam' : 'మలయాళం', 'Hindi' : 'సంస్కృతo', 'Videos' : 'వీడియోలు', 'Ragas' : 'రాగాలు', 'Artists' : 'కళాకారులు', 'Composers' : 'కవులు', 'Types' : 'రకాలు', 'Songs' : 'పాటలు', 'Duration' : 'వ్యవధి', 'Views' : 'వీక్షణలు', 'Updated' : 'నవీకరించబడింది', 'Search Results' : 'శోధన ఫలితాలు' },
                  'Kannada' : { 'Raga' : 'ರಾಗ', 'Artist' : 'ಕಲಾವಿದ', 'Composer' : 'ಕವಿ', 'Type' : 'ವಿಧ', 'Song' : 'ಹಾಡು', 'About' : 'ಬಗ್ಗೆ', 'Search' : 'ಹುಡುಕಿ', 'Playlist' : 'ಪ್ಲೇಲಿಸ್ಟ್', 'References' : 'ಉಲ್ಲೇಖಗಳು', 'Born' : 'ಜನನ', 'Died' : 'ಮರಣ', 'Thaat' : 'ಥಾಟ್', 'Arohanam' : 'ಆರೋಹಣ', 'Avarohanam' : 'ಅವರೋಹಣ', 'Tala' : 'ತಾಳಾ', 'Tala name' : 'ತಾಳಾ ಹೆಸರು', 'Tala angas' : 'ತಾಳಾ ಅಂಗಗಳು', 'Tala count' : 'ತಾಳಾ ಎಣಿಕೆ', 'Language' :'ಭಾಷೆ', 'God' : 'ದೇವರು', 'English' : 'ಆಂಗ್ಲ', 'Tamil' : 'ತಮಿಳು', 'Telugu' : 'ತೆಲುಗು', 'Kannada' : 'ಕನ್ನಡ', 'Malayalam' : 'ಮಲಯಾಳಂ', 'Hindi' : 'ಹಿಂದಿ', 'Videos' : 'ವೀಡಿಯೊಗಳು', 'Ragas' : 'ರಾಗಗಳು', 'Artists' : 'ಕಲಾವಿದರು', 'Composers' : 'ಕವಿಗಳು', 'Types' : 'ವಿಧಗಳು', 'Songs' : 'ಹಾಡುಗಳು', 'Duration' : 'ಅವಧಿ', 'Views' : 'ವೀಕ್ಷಣೆಗಳು', 'Updated' : 'ನವೀಕರಿಸಲಾಗಿದೆ', 'Search Results' : 'ಹುಡುಕಾಟ ಫಲಿತಾಂಶಗಳು' },
                  'Malayalam' : { 'Raga' : 'രാഗം', 'Artist' : 'കലാകാരി', 'Composer' : 'കവി', 'Type' : 'തരം', 'Song' : 'ഗാനം', 'About' : 'കുറിച്ച്', 'Search' : 'തിരയൽ', 'Playlist' : 'പ്പ്ളേലിസ്ട്', 'References' : 'കുറിപ്പുകൾ', 'Born' : 'ജനനം ', 'Died' : 'മരണം', 'Thaat' : 'ഥാട്', 'Arohanam' : 'ആരോഹണം', 'Avarohanam' : 'അവരോഹണം', 'Tala' : 'താളം', 'Tala name' : 'താളം പേര്', 'Tala angas' : 'താളം അംഗങ്ങൾ', 'Tala count' : 'താളം എണ്ണം', 'Language' :'ഭാഷ', 'God' : 'ദൈവം', 'English' : 'ഇംഗ്ലീഷ്', 'Tamil' : 'തമിഴ്', 'Telugu' : 'തെലുങ്ക്', 'Kannada' : 'കന്നഡ', 'Malayalam' : 'മലയാളം', 'Hindi' : 'ഹിന്ദി', 'Videos' : 'വീഡിയോകൾ', 'Ragas' : 'രാഗങ്ങൾ', 'Artists' : 'കലാകാരന്മാർ', 'Composers' : 'കവികൾ ', 'Types' : 'തരങ്ങൾ', 'Songs' : 'ഗാനങ്ങൾ', 'Duration' : 'കാലാവധി', 'Views' : 'കാഴ്‌ചകൾ', 'Updated' : 'നവീകരിക്കുക', 'Search Results' : 'തിരയൽ ഫലങ്ങൾ' },
                  'Hindi' : { 'Raga' : 'राग', 'Artist' : 'कलाकार', 'Composer' : 'कवि', 'Type' : 'प्रकार', 'Song' : 'गीत', 'About' : 'बारे', 'Search' : 'खोज', 'Playlist' : 'प्लेलिस्ट', 'References' : 'संदर्भ', 'Born' : 'जन्म', 'Died' : 'मरण', 'Thaat' : 'ठाट', 'Arohanam' : 'आरोही', 'Avarohanam' : 'अवरोही', 'Tala' : 'ताल', 'Tala name' : 'ताल नाम', 'Tala angas' : 'ताल आगा', 'Tala count' : 'ताल गिनती', 'Language' :'भाषा', 'God' : 'भगवान', 'English' : 'अंग्रेज़ी', 'Tamil' : 'तमिल', 'Telugu' : 'तेलुगु ', 'Kannada' : 'कन्नड़', 'Malayalam' : 'मलयालम', 'Hindi' : 'हिंदी', 'Videos' : 'वीडियो', 'Ragas' : 'राग', 'Artists' : 'कलाकार', 'Composers' : 'कवि', 'Types' : 'प्रकार', 'Songs' : 'गाने', 'Duration' : 'अवधि', 'Views' : 'दृश्य', 'Updated' : 'अपडेट', 'Search Results' : 'खोज परिणाम' },
                };

const MAP_MONTH_DICT = { 'Tamil' : { 'Jan' : 'ஜனவரி', 'Feb' : 'பிப்ரவரி', 'Mar' : 'மார்ச்', 'Apr' : 'ஏப்ரல்', 'May' : 'மே', 'Jun' : 'ஜூன்', 'Jul' : 'ஜூலை', 'Aug' : 'ஆகஸ்ட்', 'Sep' : 'செப்டம்பர்', 'Oct' : 'அக்டோபர்', 'Nov' : 'நவம்பர்', 'Dec' : 'டிசம்பர்' },
                         'Telugu' : { 'Jan' : 'జనవరి', 'Feb' : 'ఫిబ్రవరి', 'Mar' : 'మార్చి', 'Apr' : 'ఏప్రిల్', 'May' : 'మే', 'Jun' : 'జూన్', 'Jul' : 'జూలై', 'Aug' : 'ఆగస్టు', 'Sep' : 'సెప్టెంబర్', 'Oct' : 'అక్టోబర్', 'Nov' : 'నవంబర్', 'Dec' : 'డిసెంబర్' },
                         'Kannada' : { 'Jan' : 'ಜನವರಿ', 'Feb' : 'ಫೆಬ್ರವರಿ', 'Mar' : 'ಮಾರ್ಚ್', 'Apr' : 'ಏಪ್ರಿಲ್', 'May' : 'ಮೇ', 'Jun' : 'ಜೂನ್', 'Jul' : 'ಜುಲೈ', 'Aug' : 'ಆಗಸ್ಟ್', 'Sep' : 'ಸೆಪ್ಟೆಂಬರ್', 'Oct' : 'ಅಕ್ಟೋಬರ್', 'Nov' : 'ನವೆಂಬರ್', 'Dec' : 'ಡಿಸೆಂಬರ್' },
                         'Malayalam' : { 'Jan' : 'ജനുവരി', 'Feb' : 'ഫെബ്രുവരി', 'Mar' : 'മാർച്ച്', 'Apr' : 'ഏപ്രിൽ', 'May' : 'മേയ്', 'Jun' : 'ജൂൺ', 'Jul' : 'ജൂലൈ', 'Aug' : 'ആഗസ്റ്റ്', 'Sep' : 'സെപ്തംബർ', 'Oct' : 'ഒക്ടോബർ', 'Nov' : 'നവംബർ', 'Dec' : 'ഡിസംബർ' },
                         'Hindi' : { 'Jan' : 'जनवरी', 'Feb' : 'फ़रवरी', 'Mar' : 'मार्च', 'Apr' : 'अप्रैल', 'May' : 'मई', 'Jun' : 'जून', 'Jul' : 'जुलाई', 'Aug' : 'अगस्त', 'Sep' : 'सितंबर', 'Oct' : 'अक्टूबर', 'Nov' : 'नवंबर', 'Dec' : 'दिसंबर' }
                       } 

function lists_to_map(l1, l2) {
    let d = new Map();
    for(i=0;i<l1.length;i++){
        d.set(l1[i], l2[i]);
    }
    return d;
}

function transliterate_map_text(map, data) {
    let tokenset = new Set(map.keys());
    let maxlen = 1;
    for(let l of map.keys()) {
        maxlen = Math.max(maxlen, l.length);
    }
    let current = 0;
    let tokenlist = [];
    while (current < data.length) {
        let nextstr = data.slice(current, current+maxlen);
        let p = nextstr.slice(0, 1);
        let j = 1;
        for (let i = maxlen; i > 1; i -= 1) {
            let s = nextstr.slice(0, i);
            if (tokenset.has(s)) {
                p = s;
                j = i;
                break
            }
        }
        p = map.has(p) ? map.get(p) : p;
        tokenlist.push(p);
        current += j;
    }
    return tokenlist.join('');
}

function preprocess_harvardkyoto_tamil_to_tamil(input_txt){
    let txt = input_txt;
    txt = txt.replace(/M([cj])/gm, 'J$1');
    txt = txt.replace(/M([kg])/gm, 'G$1');
    txt = txt.replace(/M([TD])/gm, 'N$1');
    txt = txt.replace(/M([td])/gm, 'n$1');        
    txt = txt.replace(/\bjJ/gm, 'J');
    txt = txt.replace(/jJ/gm, 'JJ');
    txt = txt.replace(/Jj/gm, 'Jc');
    txt = txt.replace(/TR/gm, 'RR');
    txt = txt.replace(/[.]n/gm, 'qqqq');
    txt = txt.replace(/[.]N/gm, "QQQQ");
    txt = txt.replace(/\bn/gm, "QQQQ");
    txt = txt.replace(/nd/gm, "QQQQd");
    txt = txt.replace(/nt/gm, "QQQQt");
    txt = txt.replace(/n/gm, '.n');
    txt = txt.replace(/QQQQ/gm, "n");
    txt = txt.replace(/qqqq/gm, ".n");
    return txt;
}

let ENG_INP_MAP = [ ' jJ', '\tjJ', '\njJ', 'jJ', 'Jc', 'Jj',
                    'Mc', 'Mj', 'Mk', 'Mg', 'MT', 'MD', 'Mt', 'Md',
                    'G', '_r', '_n', 'R', 'RR', 'lR', 'lRR', 'M',
                    'A~'
                  ];

let ENG_OUT_MAP = [ ' jn', '\tjn', '\njn', 'gy', 'nc', 'nj',
                    'nc', 'nj', 'nk', 'ng', 'NT', 'ND', 'nt', 'nd',
                    'n', 'R',  'n', 'ru', 'rU', 'lu', 'lU', 'm',
                    'An'
                  ];

let ENG_LIST_MAP = lists_to_map(ENG_INP_MAP, ENG_OUT_MAP);
let HK_LIST_MAP  = lists_to_map(harvardkyoto_tamil_list, harvardkyoto_list);

let script_output_map = new Map([['hindi',     lists_to_map(harvardkyoto_expanded_list, sanskrit_expanded_list)],
                                 ['telugu',    lists_to_map(harvardkyoto_expanded_list, telugu_expanded_list)],
                                 ['tamil',     lists_to_map(harvardkyoto_tamil_expanded_list, tamil_expanded_list)],
                                 ['kannada',   lists_to_map(harvardkyoto_expanded_list, kannada_expanded_list)],
                                 ['malayalam', lists_to_map(harvardkyoto_expanded_list, malayalam_expanded_list)],
                                 ['english',   lists_to_map(harvardkyoto_expanded_list, harvardkyoto_expanded_list)]
                               ]);

function get_transliterator_text(out_lang, data) {
    var out_lang = out_lang.toLowerCase();
    let result = '';
    if (out_lang == 'tamil') {
        result = preprocess_harvardkyoto_tamil_to_tamil(data);
    } else {
        result = transliterate_map_text(HK_LIST_MAP, data);
    }
    var out_map = script_output_map.get(out_lang);
    result = transliterate_map_text(out_map, result);
    if (out_lang == 'english') {
        result = transliterate_map_text(ENG_LIST_MAP, result);
    }
    return result;
}

/*
     Language Keyboards
*/

const ROW_SIZE = 9;

function render_keys(lang_dict) {
    var basic_list = lang_dict['basic'];
    var combo_list = lang_dict['combo'];
    var row_list = [];
    var row = [];
    var col_id = 1;
    var info_list = [];
    for (var i = 0; i < basic_list.length; i++) {
        if (i > 0 && (i % ROW_SIZE) == 0) {
            row_list.push({ 'col' : row });
            row = []
        }
        var c = basic_list[i];
        c = c != '.' ? c : ' ';
        var info = { 'N' : c, 'K' : c, 'T' : 'key', 'I' : col_id };
        row.push(info);
        info_list.push(info);
        col_id += 1;
    }
    var punctuation_list = [ ':', ' ' ];
    for (var i = 0; i < punctuation_list.length; i++) {
        var c = punctuation_list[i];
        var info = { 'N' : c, 'K' : c, 'T' : 'key', 'I' : col_id };
        row.push(info);
        info_list.push(info);
        col_id += 1;
    }
    var icon_list = [ 'chevron-expand', 'backspace', 'arrow-return-left' ];
    var key_name_list = [ 'vowel reset', 'backspace', 'enter' ];
    for (var i = 0; i < icon_list.length; i++) {
        var icon = icon_list[i];
        var img_str = `<img class="ICON" src="icons/${icon}.svg" onclick="on_key_click()">`;
        var info = { 'N' : img_str, 'A' : key_name_list[i], 'K' : icon, 'T' : 'icon', 'I' : col_id };
        row.push(info);
        info_list.push(info);
        col_id += 1;
    }
    var col_span = ((col_id - 1) % ROW_SIZE) + 1;
    if (col_span > 1) {
        row[row.length - 1]['C'] = `colspan="${col_span}"`;
    }
    row_list.push({ 'col' : row });
    var key_dict = { 'row' : row_list };
    return [info_list, key_dict];
}

function replace_keys(key_dict, vowel_size, key) {
    var combo_list = window.parent.script_combo_list;
    for (var i = 0; i < vowel_size; i++) {
        var c_key = combo_list[i];
        var c = (key == '' || c_key == 0) ? key_dict[i]['N'] : key + c_key;
        var col_id = '#key_' + (i + 1);
        $(col_id).html(c);
    }
}

function on_key_click() {
   var lang_dict = window.parent.script_lang_dict;
   var text = $('#SEARCH_WORD').val();
   var element = event.srcElement;
   if (element.tagName == 'IMG') {
       event.stopPropagation();
       element = element.parentElement;
   }
   var id = element.getAttribute('id');
   var nid = parseInt(id.replace(/key_/, ''));
   var c = element.innerHTML;
   var f = c.charCodeAt(0);
   var r_key;
   if (id == lang_dict['vowel reset']) {
       r_key = '';
   } else if (id == lang_dict['backspace']) {
       if (text.length > 0) {
           text = text.slice(0, text.length - 1);
       }
   } else if (id == lang_dict['enter']) {
       load_search_data();
   } else if (window.parent.script_consonant_start <= f && f <= window.parent.script_consonant_end) {
       var pos = c.length - 1;
       var r_key = c;
       var l = text[text.length - pos];
       if (l != undefined && l.charCodeAt(0) == f) {
           var p = text.length - 1;
           if (superscript_code_list.has(text[p])) {
               text = text.slice(0, p) + c[pos - 1] + c[pos];
           } else {
               text += c[pos];
           }
           r_key = '';
       } else {
           if (nid <= lang_dict['vowels'] || c.length > 3) {
               r_key = '';
           }
           text += c;
       }
   } else {
       text += c;
   }
   if (r_key != undefined) {
       replace_keys(window.parent.input_key_dict, window.parent.script_vowel_size, r_key);
   }
   $('#SEARCH_WORD').val(text);
};

function sanskrit_to_indic(base) {
    let basic_list = []
    for (var i = 0; i < sanskrit_basic_list.length; i++) {
        var c = sanskrit_basic_list[i];
        if (c != '.') {
            var k = sanskrit_basic_list[i].charCodeAt(0);
            var l = k + (base - 0x0900);
            c = String.fromCharCode(l);
        }
        basic_list.push(c);
    }
    let combo_code_list = [];
    for (var i = 0; i < sanskrit_basic_list.length; i++) {
        var c = sanskrit_combo_code_list[i] + (base - 0x0900);
        combo_code_list.push(c);
    }
    let combo_list = combo_code_list.map(i => String.fromCharCode(i));
    return [ basic_list, combo_list ];
}

function set_input_keyboard(lang) {
    var lang_dict = lang_key_dict[lang];
    window.parent.script_lang_dict = lang_dict;
    window.parent.script_combo_list = lang_dict['combo'];
    window.parent.script_vowel_size = lang_dict['vowels'];
    var script_consonant_base = (lang_dict['base'] != 0) ? (lang_dict['base'] + 0x0015) : 0;
    window.parent.script_consonant_start = script_consonant_base;
    window.parent.script_consonant_end = script_consonant_base + 36;
    const [info_list, key_dict] = render_keys(lang_dict);
    for (var i = 0; i < info_list.length; i++) {
        var info_dict = info_list[i];
        var key_name = info_dict['A'];
        if (key_name != undefined) {
            lang_dict[key_name] = 'key_' + info_dict['I'];
        }
    } 
    window.parent.input_key_dict = info_list;
    render_card_template('#lang-key-template', '#GENKBD', key_dict);
}

var superscript_code_list = [ 0x00B2, 0x00B3, 0x2074 ];
superscript_code_list = superscript_code_list.map(i => String.fromCharCode(i));
superscript_code_list = new Set(superscript_code_list)

let tamil_basic_keys = (`அ ஆ இ  ஈ உ ஊ எ ஏ ஐ ஒ ஓ ஔ ஜ ஷ ஸ ஶ க்ஷ ஹ க ங ச ஞ ட ண த ந ப ம ய ர ல வ ழ ள ற ன  ஃ ௐ ஸ்ரீ`);
let tamil_basic_list = tamil_basic_keys.split(/\s+/);
let tamil_combo_code_list = [ 0x0BCD, 0x0BBE, 0x0BBF, 0x0BC0, 0x0BC1, 0x0BC2, 0x0BC6, 0x0BC7, 0x0BC8, 0x0BCA, 0x0BCB, 0x0BCC ];
let tamil_combo_list = tamil_combo_code_list.map(i => String.fromCharCode(i));

let sanskrit_basic_keys = (`अ आ इ ई उ ऊ ऋ ऌ ऎ ए ऐ ऒ ओ औ ॠ ॡ  ँ ं ः ऽ ॐ . . . . . . क ख ग घ ङ च छ ज झ ञ ट ठ ड ढ ण त थ द ध न ऩ प फ ब भ म य र ऱ ल ळ ऴ व श ष स ह`);
let sanskrit_basic_list = sanskrit_basic_keys.split(/\s+/);
let sanskrit_combo_code_list = [ 0x094D, 0x093E, 0x093F, 0x0940, 0x0941, 0x0942, 0x0943, 0x0962, 0x0946, 0x0947, 0x0948, 0x094A, 0x094B, 0x094C, 0x0944, 0x0963, 0x0901, 0x0902, 0x903 ];
let sanskrit_combo_list = sanskrit_combo_code_list.map(i => String.fromCharCode(i));

let dummy_combo_list = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
let english_basic_keys = (`a A i I u U R lR e E ai o O au RR lRR ~ M H ' oM K . . . . . k kh g gh n c ch j jh n T Th D Dh N t th d dh n n p ph b bh m y r r l L zh v S sh s h`);
let english_basic_list = english_basic_keys.split(/\s+/);
let english_combo_list = dummy_combo_list;

var lang_key_dict = { 'tamil'     : { 'basic' : tamil_basic_list, 'combo' : tamil_combo_list, 'vowels' : 12, 'base' : 0x0B80 },
                      'hindi'     : { 'basic' : sanskrit_basic_list, 'combo' : sanskrit_combo_list,  'vowels' : 19, 'base' : 0x0900 },
                      'telugu'    : { 'vowels' : 19, 'base' : 0x0C00 },
                      'kannada'   : { 'vowels' : 19, 'base' : 0x0C80 },
                      'malayalam' : { 'vowels' : 19, 'base' : 0x0D00 },
                      'english'   : { 'basic' : english_basic_list, 'combo' : english_combo_list,  'vowels' : 19, 'base' : 0 }
                    }

for (var key in lang_key_dict) {
    var info_dict = lang_key_dict[key];
    if (info_dict['basic'] == undefined) {
        var base = info_dict['base'];
        var [basic_list, combo_list] = sanskrit_to_indic(base);
        info_dict['basic'] = basic_list;
        info_dict['combo'] = combo_list;
    }
}

