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
`).split(/\s+/);


let harvardkyoto_expanded_text = (`

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

`);

let harvardkyoto_expanded_list = harvardkyoto_expanded_text.split(/\s+/);


let sanskrit_extended_expanded_list = (`

अ आ इ ई उ ऊ ऋ लृ ऎ ए ऐ ऒ ओ औ ॠ लॄ

क् ख् ग् घ् ङ् च् छ् ज् झ् ञ् ट् ठ् ड् ढ् ण् त् थ् द् ध् न् ऩ् प् फ् ब् भ् म् य् र् ऱ् ल् ळ् ऴ् व् श् ष् स् ह्

क का कि की कु कू कृ कॢ कॆ के कै कॊ को कौ कॄ कॣ
ख खा खि खी खु खू खृ खॢ खॆ खे खै खॊ खो खौ खॄ खॣ
ग गा गि गी गु गू गृ गॢ गॆ गे गै गॊ गो गौ गॄ गॣ
घ घा घि घी घु घू घृ घॢ घॆ घे घै घॊ घो घौ घॄ घॣ
ङ ङा ङि ङी ङु ङू ङृ ङॢ ङॆ ङे ङै ङॊ ङो ङौ ङॄ ङॣ
च चा चि ची चु चू चृ चॢ चॆ चे चै चॊ चो चौ चॄ चॣ
छ छा छि छी छु छू छृ छॢ छॆ छे छै छॊ छो छौ छॄ छॣ
ज जा जि जी जु जू जृ जॢ जॆ जे जै जॊ जो जौ जॄ जॣ
झ झा झि झी झु झू झृ झॢ झॆ झे झै झॊ झो झौ झॄ झॣ
ञ ञा ञि ञी ञु ञू ञृ ञॢ ञॆ ञे ञै ञॊ ञो ञौ ञॄ ञॣ
ट टा टि टी टु टू टृ टॢ टॆ टे टै टॊ टो टौ टॄ टॣ
ठ ठा ठि ठी ठु ठू ठृ ठॢ ठॆ ठे ठै ठॊ ठो ठौ ठॄ ठॣ
ड डा डि डी डु डू डृ डॢ डॆ डे डै डॊ डो डौ डॄ डॣ
ढ ढा ढि ढी ढु ढू ढृ ढॢ ढॆ ढे ढै ढॊ ढो ढौ ढॄ ढॣ
ण णा णि णी णु णू णृ णॢ णॆ णे णै णॊ णो णौ णॄ णॣ
त ता ति ती तु तू तृ तॢ तॆ ते तै तॊ तो तौ तॄ तॣ
थ था थि थी थु थू थृ थॢ थॆ थे थै थॊ थो थौ थॄ थॣ
द दा दि दी दु दू दृ दॢ दॆ दे दै दॊ दो दौ दॄ दॣ
ध धा धि धी धु धू धृ धॢ धॆ धे धै धॊ धो धौ धॄ धॣ
न ना नि नी नु नू नृ नॢ नॆ ने नै नॊ नो नौ नॄ नॣ
ऩ ऩा ऩि ऩी ऩु ऩू ऩृ ऩॢ ऩॆ ऩे ऩै ऩॊ ऩो ऩौ ऩॄ ऩॣ
प पा पि पी पु पू पृ पॢ पॆ पे पै पॊ पो पौ पॄ पॣ
फ फा फि फी फु फू फृ फॢ फॆ फे फै फॊ फो फौ फॄ फॣ
ब बा बि बी बु बू बृ बॢ बॆ बे बै बॊ बो बौ बॄ बॣ
भ भा भि भी भु भू भृ भॢ भॆ भे भै भॊ भो भौ भॄ भॣ
म मा मि मी मु मू मृ मॢ मॆ मे मै मॊ मो मौ मॄ मॣ
य या यि यी यु यू यृ यॢ यॆ ये यै यॊ यो यौ यॄ यॣ
र रा रि री रु रू रृ रॢ रॆ रे रै रॊ रो रौ रॄ रॣ
ऱ ऱा ऱि ऱी ऱु ऱू ऱृ ऱॢ ऱॆ ऱे ऱै ऱॊ ऱो ऱौ ऱॄ ऱॣ
ल ला लि ली लु लू लृ लॢ लॆ ले लै लॊ लो लौ लॄ लॣ
ळ ळा ळि ळी ळु ळू ळृ ळॢ ळॆ ळे ळै ळॊ ळो ळौ ळॄ ळॣ
ऴ ऴा ऴि ऴी ऴु ऴू ऴृ ऴॢ ऴॆ ऴे ऴै ऴॊ ऴो ऴौ ऴॄ ऴॣ
व वा वि वी वु वू वृ वॢ वॆ वे वै वॊ वो वौ वॄ वॣ
श शा शि शी शु शू शृ शॢ शॆ शे शै शॊ शो शौ शॄ शॣ
ष षा षि षी षु षू षृ षॢ षॆ षे षै षॊ षो षौ षॄ षॣ
स सा सि सी सु सू सृ सॢ सॆ से सै सॊ सो सौ सॄ सॣ
ह हा हि ही हु हू हृ हॢ हॆ हे है हॊ हो हौ हॄ हॣ

ँ ं ः ऽ ॐ ग्¹

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

let telugu_extended_expanded_list = (`

అ ఆ ఇ ఈ ఉ ఊ ఋ ఌ ఎ ఏ ఐ ఒ ఓ ఔ ౠ ౡ

క్ ఖ్ గ్ ఘ్ ఙ్ చ్ ఛ్ జ్ ఝ్ ఞ్ ట్ ఠ్ డ్ ఢ్ ణ్ త్ థ్ ద్ ధ్ న్ న్¹ ప్ ఫ్ బ్ భ్ మ్ య్ ర్ ఱ్ ల్ ళ్ ఴ్ వ్ శ్ ష్ స్ హ్

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
న¹ నా¹ ని¹ నీ¹ ను¹ నూ¹ నృ¹ నౢ¹ నె¹ నే¹ నై¹ నొ¹ నో¹ నౌ¹ నౄ¹ నౣ¹
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

ఁ  ం  ః ఽ ఓమ్¹ గ్¹

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

let kannada_extended_expanded_list = (`

ಅ ಆ ಇ ಈ ಉ ಊ ಋ ಌ ಎ ಏ ಐ ಒ ಓ ಔ ೠ ೡ

ಕ್ ಖ್ ಗ್ ಘ್ ಙ್ ಚ್ ಛ್ ಜ್ ಝ್ ಞ್ ಟ್ ಠ್ ಡ್ ಢ್ ಣ್ ತ್ ಥ್ ದ್ ಧ್ ನ್ ನ್¹ ಪ್ ಫ್ ಬ್ ಭ್ ಮ್ ಯ್ ರ್ ಱ್ ಲ್ ಳ್ ಳ್¹ ವ್ ಶ್ ಷ್ ಸ್ ಹ್

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
ನ¹ ನಾ¹ ನಿ¹ ನೀ¹ ನು¹ ನೂ¹ ನೃ¹ ನೢ¹ ನೆ¹ ನೇ¹ ನೈ¹ ನೊ¹ ನೋ¹ ನೌ¹ ನೄ¹ ನೣ¹
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
ಳ¹ ಳಾ¹ ಳಿ¹ ಳೀ¹ ಳು¹ ಳೂ¹ ಳೃ¹ ಳೢ¹ ಳೆ¹ ಳೇ¹ ಳೈ¹ ಳೊ¹ ಳೋ¹ ಳೌ¹ ಳೄ¹ ಳೣ¹
ವ ವಾ ವಿ ವೀ ವು ವೂ ವೃ ವೢ ವೆ ವೇ ವೈ ವೊ ವೋ ವೌ ವೄ ವೣ
ಶ ಶಾ ಶಿ ಶೀ ಶು ಶೂ ಶೃ ಶೢ ಶೆ ಶೇ ಶೈ ಶೊ ಶೋ ಶೌ ಶೄ ಶೣ
ಷ ಷಾ ಷಿ ಷೀ ಷು ಷೂ ಷೃ ಷೢ ಷೆ ಷೇ ಷೈ ಷೊ ಷೋ ಷೌ ಷೄ ಷೣ
ಸ ಸಾ ಸಿ ಸೀ ಸು ಸೂ ಸೃ ಸೢ ಸೆ ಸೇ ಸೈ ಸೊ ಸೋ ಸೌ ಸೄ ಸೣ
ಹ ಹಾ ಹಿ ಹೀ ಹು ಹೂ ಹೃ ಹೢ ಹೆ ಹೇ ಹೈ ಹೊ ಹೋ ಹೌ ಹೄ ಹೣ

ಂ²  ಂ  ಃ ಽ ಓಮ್¹ ಗ್¹

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

let malayalam_extended_expanded_list = (`


അ ആ ഇ ഈ ഉ ഊ ഋ ഌ എ ഏ ഐ ഒ ഓ ഔ ൠ ൡ

ക് ഖ് ഗ് ഘ് ങ് ച് ഛ് ജ് ഝ് ഞ് ട് ഠ് ഡ് ഢ് ണ് ത് ഥ് ദ് ധ് ന് ന്¹ പ് ഫ് ബ് ഭ് മ് യ് ര് റ് ല് ള് ഴ് വ് ശ് ഷ് സ് ഹ്

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
ന¹ നാ¹ നി¹ നീ¹ നു¹ നൂ¹ നൃ¹ നൢ¹ നെ¹ നേ¹ നൈ¹ നൊ¹ നോ¹ നൌ¹ നൄ¹ നൣ¹
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

ം²  ം  ഃ ഽ ഓമ്¹ ഗ്¹


`).split(/\s+/);

let tamil_extended_expanded_list = (`
அ ஆ இ ஈ உ ஊ ரு² லு² எ ஏ ஐ ஒ ஓ ஔ ரூ³ லூ³

க் க்² க்³ க்⁴ ங் ச் ச்² ஜ் ச்⁴ ஞ் ட் ட்² ட்³ ட்⁴ ண் த் த்² த்³ த்⁴ ந் ன் ப் ப்² ப்³ ப்⁴ ம் ய் ர் ற் ல் ள் ழ் வ் ஶ் ஷ் ஸ் ஹ்

க கா கி கீ கு கூ க்ரு² க்லு² கெ கே கை கொ கோ கௌ க்ரூ³ க்லூ³
க² கா² கி² கீ² கு² கூ² க்²ரு² க்²லு² கெ² கே² கை² கொ² கோ² கௌ² க்²ரூ³ க்²லூ³
க³ கா³ கி³ கீ³ கு³ கூ³ க்³ரு² க்³லு² கெ³ கே³ கை³ கொ³ கோ³ கௌ³ க்³ரூ³ க்³லூ³
க⁴ கா⁴ கி⁴ கீ⁴ கு⁴ கூ⁴ க்⁴ரு² க்⁴லு² கெ⁴ கே⁴ கை⁴ கொ⁴ கோ⁴ கௌ⁴ க்⁴ரூ³ க்⁴லூ³
ங ஙா ஙி ஙீ ஙு ஙூ ங்ரு² ங்லு² ஙெ ஙே ஙை ஙொ ஙோ ஙௌ ங்ரூ³ ங்லூ³
ச சா சி சீ சு சூ ச்ரு² ச்லு² செ சே சை சொ சோ சௌ ச்ரூ³ ச்லூ³
ச² சா² சி² சீ² சு² சூ² ச்²ரு² ச்²லு² செ² சே² சை² சொ² சோ² சௌ² ச்²ரூ³ ச்²லூ³
ஜ ஜா ஜி ஜீ ஜு ஜூ ஜ்ரு² ஜ்லு² ஜெ ஜே ஜை ஜொ ஜோ ஜௌ ஜ்ரூ³ ஜ்லூ³
ச⁴ சா⁴ சி⁴ சீ⁴ சு⁴ சூ⁴ ச்⁴ரு² ச்⁴லு² செ⁴ சே⁴ சை⁴ சொ⁴ சோ⁴ சௌ⁴ ச்⁴ரூ³ ச்⁴லூ³
ஞ ஞா ஞி ஞீ ஞு ஞூ ஞ்ரு² ஞ்லு² ஞெ ஞே ஞை ஞொ ஞோ ஞௌ ஞ்ரூ³ ஞ்லூ³
ட டா டி டீ டு டூ ட்ரு² ட்லு² டெ டே டை டொ டோ டௌ ட்ரூ³ ட்லூ³
ட² டா² டி² டீ² டு² டூ² ட்²ரு² ட்²லு² டெ² டே² டை² டொ² டோ² டௌ² ட்²ரூ³ ட்²லூ³
ட³ டா³ டி³ டீ³ டு³ டூ³ ட்³ரு² ட்³லு² டெ³ டே³ டை³ டொ³ டோ³ டௌ³ ட்³ரூ³ ட்³லூ³
ட⁴ டா⁴ டி⁴ டீ⁴ டு⁴ டூ⁴ ட்⁴ரு² ட்⁴லு² டெ⁴ டே⁴ டை⁴ டொ⁴ டோ⁴ டௌ⁴ ட்⁴ரூ³ ட்⁴லூ³
ண ணா ணி ணீ ணு ணூ ண்ரு² ண்லு² ணெ ணே ணை ணொ ணோ ணௌ ண்ரூ³ ண்லூ³
த தா தி தீ து தூ த்ரு² த்லு² தெ தே தை தொ தோ தௌ த்ரூ³ த்லூ³
த² தா² தி² தீ² து² தூ² த்²ரு² த்²லு² தெ² தே² தை² தொ² தோ² தௌ² த்²ரூ³ த்²லூ³
த³ தா³ தி³ தீ³ து³ தூ³ த்³ரு² த்³லு² தெ³ தே³ தை³ தொ³ தோ³ தௌ³ த்³ரூ³ த்³லூ³
த⁴ தா⁴ தி⁴ தீ⁴ து⁴ தூ⁴ த்⁴ரு² த்⁴லு² தெ⁴ தே⁴ தை⁴ தொ⁴ தோ⁴ தௌ⁴ த்⁴ரூ³ த்⁴லூ³
ந நா நி நீ நு நூ ந்ரு² ந்லு² நெ நே நை நொ நோ நௌ ந்ரூ³ ந்லூ³
ன னா னி னீ னு னூ ன்ரு² ன்லு² னெ னே னை னொ னோ னௌ ன்ரூ³ ன்லூ³
ப பா பி பீ பு பூ ப்ரு² ப்லு² பெ பே பை பொ போ பௌ ப்ரூ³ ப்லூ³
ப² பா² பி² பீ² பு² பூ² ப்²ரு² ப்²லு² பெ² பே² பை² பொ² போ² பௌ² ப்²ரூ³ ப்²லூ³
ப³ பா³ பி³ பீ³ பு³ பூ³ ப்³ரு² ப்³லு² பெ³ பே³ பை³ பொ³ போ³ பௌ³ ப்³ரூ³ ப்³லூ³
ப⁴ பா⁴ பி⁴ பீ⁴ பு⁴ பூ⁴ ப்⁴ரு² ப்⁴லு² பெ⁴ பே⁴ பை⁴ பொ⁴ போ⁴ பௌ⁴ ப்⁴ரூ³ ப்⁴லூ³
ம மா மி மீ மு மூ ம்ரு² ம்லு² மெ மே மை மொ மோ மௌ ம்ரூ³ ம்லூ³
ய யா யி யீ யு யூ ய்ரு² ய்லு² யெ யே யை யொ யோ யௌ ய்ரூ³ ய்லூ³
ர ரா ரி ரீ ரு ரூ ர்ரு² ர்லு² ரெ ரே ரை ரொ ரோ ரௌ ர்ரூ³ ர்லூ³
ற றா றி றீ று றூ ற்ரு² ற்லு² றெ றே றை றொ றோ றௌ ற்ரூ³ ற்லூ³
ல லா லி லீ லு லூ லு² ல்லு² லெ லே லை லொ லோ லௌ லூ³ ல்லூ³
ள ளா ளி ளீ ளு ளூ ள்ரு² ள்லு² ளெ ளே ளை ளொ ளோ ளௌ ள்ரூ³ ள்லூ³
ழ ழா ழி ழீ ழு ழூ ழ்ரு² ழ்லு² ழெ ழே ழை ழொ ழோ ழௌ ழ்ரூ³ ழ்லூ³
வ வா வி வீ வு வூ வ்ரு² வ்லு² வெ வே வை வொ வோ வௌ வ்ரூ³ வ்லூ³
ஶ ஶா ஶி ஶீ ஶு ஶூ ஶ்ரு²  ஶ்லு² ஶெ ஶே ஶை ஶொ ஶோ ஶௌ  ஶ்ரூ³ ஶ்லூ³
ஷ ஷா ஷி ஷீ ஷு ஷூ ஷ்ரு² ஷ்லு² ஷெ ஷே ஷை ஷொ ஷோ ஷௌ ஷ்ரூ³ ஷ்லூ³
ஸ ஸா ஸி ஸீ ஸு ஸூ ஸ்ரு² ஸ்லு² ஸெ ஸே ஸை ஸொ ஸோ ஸௌ ஸ்ரூ³ ஸ்லூ³
ஹ ஹா ஹி ஹீ ஹு ஹூ ஹ்ரு² ஹ்லு² ஹெ ஹே ஹை ஹொ ஹோ ஹௌ ஹ்ரூ³ ஹ்லூ³

ம்² ம்¹ ஹ¹ ' ௐ ஃ


`).split(/\s+/);


let iso_expanded_list = (`

a ā i ī u ū r̥ l̥ e ē ai o ō au r̥̄ l̥̄

k kh g gh ṅ c ch j jh ñ ṭ ṭh ḍ ḍh ṇ t th d dh n ṉ p ph b bh m y r ṟ l ḷ ḻ v ś ṣ s h

ka kā ki kī ku kū kr̥ kl̥ ke kē kai ko kō kau kr̥̄ kl̥̄
kha khā khi khī khu khū khr̥ khl̥ khe khē khai kho khō khau khr̥̄ khl̥̄
ga gā gi gī gu gū gr̥ gl̥ ge gē gai go gō gau gr̥̄ gl̥̄
gha ghā ghi ghī ghu ghū ghr̥ ghl̥ ghe ghē ghai gho ghō ghau ghr̥̄ ghl̥̄
ṅa ṅā ṅi ṅī ṅu ṅū ṅr̥ ṅl̥ ṅe ṅē ṅai ṅo ṅō ṅau ṅr̥̄ ṅl̥̄
ca cā ci cī cu cū cr̥ cl̥ ce cē cai co cō cau cr̥̄ cl̥̄
cha chā chi chī chu chū chr̥ chl̥ che chē chai cho chō chau chr̥̄ chl̥̄
ja jā ji jī ju jū jr̥ jl̥ je jē jai jo jō jau jr̥̄ jl̥̄
jha jhā jhi jhī jhu jhū jhr̥ jhl̥ jhe jhē jhai jho jhō jhau jhr̥̄ jhl̥̄
ña ñā ñi ñī ñu ñū ñr̥ ñl̥ ñe ñē ñai ño ñō ñau ñr̥̄ ñl̥̄
ṭa ṭā ṭi ṭī ṭu ṭū ṭr̥ ṭl̥ ṭe ṭē ṭai ṭo ṭō ṭau ṭr̥̄ ṭl̥̄
ṭha ṭhā ṭhi ṭhī ṭhu ṭhū ṭhr̥ ṭhl̥ ṭhe ṭhē ṭhai ṭho ṭhō ṭhau ṭhr̥̄ ṭhl̥̄
ḍa ḍā ḍi ḍī ḍu ḍū ḍr̥ ḍl̥ ḍe ḍē ḍai ḍo ḍō ḍau ḍr̥̄ ḍl̥̄
ḍha ḍhā ḍhi ḍhī ḍhu ḍhū ḍhr̥ ḍhl̥ ḍhe ḍhē ḍhai ḍho ḍhō ḍhau ḍhr̥̄ ḍhl̥̄
ṇa ṇā ṇi ṇī ṇu ṇū ṇr̥ ṇl̥ ṇe ṇē ṇai ṇo ṇō ṇau ṇr̥̄ ṇl̥̄
ta tā ti tī tu tū tr̥ tl̥ te tē tai to tō tau tr̥̄ tl̥̄
tha thā thi thī thu thū thr̥ thl̥ the thē thai tho thō thau thr̥̄ thl̥̄
da dā di dī du dū dr̥ dl̥ de dē dai do dō dau dr̥̄ dl̥̄
dha dhā dhi dhī dhu dhū dhr̥ dhl̥ dhe dhē dhai dho dhō dhau dhr̥̄ dhl̥̄
na nā ni nī nu nū nr̥ nl̥ ne nē nai no nō nau nr̥̄ nl̥̄
ṉa ṉā ṉi ṉī ṉu ṉū ṉr̥ ṉl̥ ṉe ṉē ṉai ṉo ṉō ṉau ṉr̥̄ ṉl̥̄
pa pā pi pī pu pū pr̥ pl̥ pe pē pai po pō pau pr̥̄ pl̥̄
pha phā phi phī phu phū phr̥ phl̥ phe phē phai pho phō phau phr̥̄ phl̥̄
ba bā bi bī bu bū br̥ bl̥ be bē bai bo bō bau br̥̄ bl̥̄
bha bhā bhi bhī bhu bhū bhr̥ bhl̥ bhe bhē bhai bho bhō bhau bhr̥̄ bhl̥̄
ma mā mi mī mu mū mr̥ ml̥ me mē mai mo mō mau mr̥̄ ml̥̄
ya yā yi yī yu yū yr̥ yl̥ ye yē yai yo yō yau yr̥̄ yl̥̄
ra rā ri rī ru rū rr̥ rl̥ re rē rai ro rō rau rr̥̄ rl̥̄
ṟa ṟā ṟi ṟī ṟu ṟū ṟr̥ ṟl̥ ṟe ṟē ṟai ṟo ṟō ṟau ṟr̥̄ ṟl̥̄
la lā li lī lu lū l̥ ll̥ le lē lai lo lō lau l̥̄ ll̥̄
ḷa ḷā ḷi ḷī ḷu ḷū ḷr̥ ḷl̥ ḷe ḷē ḷai ḷo ḷō ḷau ḷr̥̄ ḷl̥̄
ḻa ḻā ḻi ḻī ḻu ḻū ḻr̥ ḻl̥ ḻe ḻē ḻai ḻo ḻō ḻau ḻr̥̄ ḻl̥̄
va vā vi vī vu vū vr̥ vl̥ ve vē vai vo vō vau vr̥̄ vl̥̄
śa śā śi śī śu śū śr̥ śl̥ śe śē śai śo śō śau śr̥̄ śl̥̄
ṣa ṣā ṣi ṣī ṣu ṣū ṣr̥ ṣl̥ ṣe ṣē ṣai ṣo ṣō ṣau ṣr̥̄ ṣl̥̄
sa sā si sī su sū sr̥ sl̥ se sē sai so sō sau sr̥̄ sl̥̄
ha hā hi hī hu hū hr̥ hl̥ he hē hai ho hō hau hr̥̄ hl̥̄

m̐ ṁ ḥ ' ōṁ ḵ

`).split(/\s+/);

let iast_expanded_list = (`

a ā i ī u ū ṛ ḷ e ē ai o ō au ṝ ḹ

k kh g gh ṅ c ch j jh ñ ṭ ṭh ḍ ḍh ṇ t th d dh n ṉ p ph b bh m y r ṟ l l̤ ḻ v ś ṣ s h

ka kā ki kī ku kū kṛ kḷ ke kē kai ko kō kau kṝ kḹ
kha khā khi khī khu khū khṛ khḷ khe khē khai kho khō khau khṝ khḹ
ga gā gi gī gu gū gṛ gḷ ge gē gai go gō gau gṝ gḹ
gha ghā ghi ghī ghu ghū ghṛ ghḷ ghe ghē ghai gho ghō ghau ghṝ ghḹ
ṅa ṅā ṅi ṅī ṅu ṅū ṅṛ ṅḷ ṅe ṅē ṅai ṅo ṅō ṅau ṅṝ ṅḹ
ca cā ci cī cu cū cṛ cḷ ce cē cai co cō cau cṝ cḹ
cha chā chi chī chu chū chṛ chḷ che chē chai cho chō chau chṝ chḹ
ja jā ji jī ju jū jṛ jḷ je jē jai jo jō jau jṝ jḹ
jha jhā jhi jhī jhu jhū jhṛ jhḷ jhe jhē jhai jho jhō jhau jhṝ jhḹ
ña ñā ñi ñī ñu ñū ñṛ ñḷ ñe ñē ñai ño ñō ñau ñṝ ñḹ
ṭa ṭā ṭi ṭī ṭu ṭū ṭṛ ṭḷ ṭe ṭē ṭai ṭo ṭō ṭau ṭṝ ṭḹ
ṭha ṭhā ṭhi ṭhī ṭhu ṭhū ṭhṛ ṭhḷ ṭhe ṭhē ṭhai ṭho ṭhō ṭhau ṭhṝ ṭhḹ
ḍa ḍā ḍi ḍī ḍu ḍū ḍṛ ḍḷ ḍe ḍē ḍai ḍo ḍō ḍau ḍṝ ḍḹ
ḍha ḍhā ḍhi ḍhī ḍhu ḍhū ḍhṛ ḍhḷ ḍhe ḍhē ḍhai ḍho ḍhō ḍhau ḍhṝ ḍhḹ
ṇa ṇā ṇi ṇī ṇu ṇū ṇṛ ṇḷ ṇe ṇē ṇai ṇo ṇō ṇau ṇṝ ṇḹ
ta tā ti tī tu tū tṛ tḷ te tē tai to tō tau tṝ tḹ
tha thā thi thī thu thū thṛ thḷ the thē thai tho thō thau thṝ thḹ
da dā di dī du dū dṛ dḷ de dē dai do dō dau dṝ dḹ
dha dhā dhi dhī dhu dhū dhṛ dhḷ dhe dhē dhai dho dhō dhau dhṝ dhḹ
na nā ni nī nu nū nṛ nḷ ne nē nai no nō nau nṝ nḹ
ṉa ṉā ṉi ṉī ṉu ṉū ṉṛ ṉḷ ṉe ṉē ṉai ṉo ṉō ṉau ṉṝ ṉḹ
pa pā pi pī pu pū pṛ pḷ pe pē pai po pō pau pṝ pḹ
pha phā phi phī phu phū phṛ phḷ phe phē phai pho phō phau phṝ phḹ
ba bā bi bī bu bū bṛ bḷ be bē bai bo bō bau bṝ bḹ
bha bhā bhi bhī bhu bhū bhṛ bhḷ bhe bhē bhai bho bhō bhau bhṝ bhḹ
ma mā mi mī mu mū mṛ mḷ me mē mai mo mō mau mṝ mḹ
ya yā yi yī yu yū yṛ yḷ ye yē yai yo yō yau yṝ yḹ
ra rā ri rī ru rū rṛ rḷ re rē rai ro rō rau rṝ rḹ
ṟa ṟā ṟi ṟī ṟu ṟū ṟṛ ṟḷ ṟe ṟē ṟai ṟo ṟō ṟau ṟṝ ṟḹ
la lā li lī lu lū ḷ lḷ le lē lai lo lō lau ḹ lḹ
l̤a l̤ā l̤i l̤ī l̤u l̤ū l̤ṛ l̤ḷ l̤e l̤ē l̤ai l̤o l̤ō l̤au l̤ṝ l̤ḹ
ḻa ḻā ḻi ḻī ḻu ḻū ḻṛ ḻḷ ḻe ḻē ḻai ḻo ḻō ḻau ḻṝ ḻḹ
va vā vi vī vu vū vṛ vḷ ve vē vai vo vō vau vṝ vḹ
śa śā śi śī śu śū śṛ śḷ śe śē śai śo śō śau śṝ śḹ
ṣa ṣā ṣi ṣī ṣu ṣū ṣṛ ṣḷ ṣe ṣē ṣai ṣo ṣō ṣau ṣṝ ṣḹ
sa sā si sī su sū sṛ sḷ se sē sai so sō sau sṝ sḹ
ha hā hi hī hu hū hṛ hḷ he hē hai ho hō hau hṝ hḹ

m̐ ṃ ḥ ' oṃ ḵ


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

let MAP_LANG_DICT = { 'English' : 'English', 'தமிழ்' : 'Tamil', 'తెలుగు' : 'Telugu', 'ಕನ್ನಡ' : 'Kannada', 'മലയാളം' : 'Malayalam', 'संस्कृत' : 'Sanskrit' }

let MAP_MENU_DICT = { 'Tamil' : { 'Raga' : 'ராகம்', 'Artist' : 'கலைஞர்', 'Composer' : 'கவிஞர்', 'Type' : 'வகை', 'Song' : 'பாடல்', 'About' : 'பற்றி' },
                  'Telugu' : { 'Raga' : 'రాగం', 'Artist' : 'కళాకారుడు', 'Composer' : 'కవి', 'Type' : 'రకము', 'Song' : 'పాట', 'About' : 'గురించి' },
                  'Kannada' : { 'Raga' : 'ರಾಗ', 'Artist' : 'ಕಲಾವಿದ', 'Composer' : 'ಕವಿ', 'Type' : 'ವಿಧ', 'Song' : 'ಹಾಡು', 'About' : 'ಬಗ್ಗೆ' },
                  'Malayalam' : { 'Raga' : 'രാഗം', 'Artist' : 'കലാകാരി', 'Composer' : 'കവി', 'Type' : 'തരം', 'Song' : 'ഗാനം', 'About' : 'കുറിച്ച് ' },
                  'Sanskrit' : { 'Raga' : 'राग', 'Artist' : 'कलाकार', 'Composer' : 'कवि', 'Type' : 'प्रकार', 'Song' : 'गीत', 'About' : 'बारे' },
                };

let MAP_STAT_DICT = { 'Tamil' : { 'Videos' : 'வீடியோக்கள்', 'Ragas' : 'ராகங்கள்', 'Artists' : 'கலைஞர்கள்', 'Composers' : 'கவிஞர்கள்', 'Types' : 'வகைகள்', 'Songs' : 'பாடல்கள்', 'Duration' : 'காலம்', 'Views' : 'பார்வைகள்', 'Updated' : 'புதுப்பிக்கப்பட்டது' },
                  'Telugu' : { 'Videos' : 'వీడియోలు', 'Ragas' : 'రాగాలు', 'Artists' : 'కళాకారులు', 'Composers' : 'కవులు', 'Types' : 'రకాలు', 'Songs' : 'పాటలు', 'Duration' : 'వ్యవధి', 'Views' : 'వీక్షణలు', 'Updated' : 'నవీకరించబడింది' },
                  'Kannada' : { 'Videos' : 'ವೀಡಿಯೊಗಳು', 'Ragas' : 'ರಾಗಗಳು', 'Artists' : 'ಕಲಾವಿದರು', 'Composers' : 'ಕವಿಗಳು', 'Types' : 'ವಿಧಗಳು', 'Songs' : 'ಹಾಡುಗಳು', 'Duration' : 'ಅವಧಿ', 'Views' : 'ವೀಕ್ಷಣೆಗಳು', 'Updated' : 'ನವೀಕರಿಸಲಾಗಿದೆ' },
                  'Malayalam' : { 'Videos' : 'വീഡിയോകൾ', 'Ragas' : 'രാഗങ്ങൾ', 'Artists' : 'കലാകാരന്മാർ', 'Composers' : 'കവികൾ ', 'Types' : 'തരങ്ങൾ', 'Songs' : 'ഗാനങ്ങൾ', 'Duration' : 'കാലാവധി', 'Views' : 'കാഴ്‌ചകൾ', 'Updated' : 'നവീകരിക്കുക' },
                  'Sanskrit' : { 'Videos' : 'वीडियो', 'Ragas' : 'राग', 'Artists' : 'कलाकार', 'Composers' : 'कवि', 'Types' : 'प्रकार', 'Songs' : 'गाने', 'Duration' : 'अवधि', 'Views' : 'दृश्य', 'Updated' : 'अपडेट' },
                };

let MAP_INFO_DICT = { 'Tamil' : { 'Search' : 'தேடல்', 'Playlist' : 'பிளேலிஸ்ட்', 'References' : 'குறிப்புகள்', 'Born' : 'பிறப்பு', 'Died' : 'இறப்பு', 'Melakartha' : 'மேளகர்த்தா', 'Arohanam' : 'ஆரோகணம்', 'Avarohanam' : 'அவரோகணம்', 'Tala' : 'தாளம்', 'Tala name' : 'தாள பெயர்', 'Tala angas' : 'தாள அங்கங்கள்', 'Tala count' : 'தாள எண்ணிக்கை', 'Language' :'மொழி', 'God' : 'இறைவன்', 'English' : 'ஆங்கிலம்', 'Tamil' : 'தமிழ்', 'Telugu' : 'தெலுங்கு', 'Kannada' : 'கன்னடா', 'Malayalam' : 'மலையாளம்', 'Sanskrit' : 'சமஸ்கிருதம்' },
                  'Telugu' : { 'Search' : 'వెతకండి', 'Playlist' : 'ప్లేలిస్ట్', 'References' : 'ప్రస్తావనలు', 'Born' : 'జననం', 'Died' : 'మరణం', 'Melakartha' : 'మేళకర్త', 'Arohanam' : 'ఆరోహణ', 'Avarohanam' : 'అవరోహణ', 'Tala' : 'తాలా', 'Tala name' : 'తాలా పేరు ', 'Tala angas' : 'తాలా అంగస్', 'Tala count' : 'తాలా లెక్కింపు ', 'Language' :'భాష', 'God' : 'దేవుడు', 'English' : 'ఆంగ్లం', 'Tamil' : 'తమిళం', 'Telugu' : 'తెలుగు', 'Kannada' : 'కన్నడ', 'Malayalam' : 'మలయాళం', 'Sanskrit' : 'సంస్కృతo' },
                  'Kannada' : { 'Search' : 'ಹುಡುಕಿ', 'Playlist' : 'ಪ್ಲೇಲಿಸ್ಟ್', 'References' : 'ಉಲ್ಲೇಖಗಳು', 'Born' : 'ಜನನ', 'Died' : 'ಮರಣ', 'Melakartha' : 'ಮೇಳಕರ್ತ', 'Arohanam' : 'ಆರೋಹಣ', 'Avarohanam' : 'ಅವರೋಹಣ', 'Tala' : 'ತಾಳಾ', 'Tala name' : 'ತಾಳಾ ಹೆಸರು ', 'Tala angas' : 'ತಾಳಾ ಅಂಗಗಳು', 'Tala count' : 'ತಾಳಾ ಎಣಿಕೆ', 'Language' :'ಭಾಷೆ', 'God' : 'ದೇವರು', 'English' : 'ಆಂಗ್ಲ', 'Tamil' : 'ತಮಿಳು', 'Telugu' : 'ತೆಲುಗು', 'Kannada' : 'ಕನ್ನಡ', 'Malayalam' : 'ಮಲಯಾಳಂ', 'Sanskrit' : 'ಸಂಸ್ಕೃತ' },
                  'Malayalam' : { 'Search' : 'തിരയൽ', 'Playlist' : 'പ്പ്ളേലിസ്ട്', 'References' : 'കുറിപ്പുകൾ', 'Born' : 'ജനനം ', 'Died' : 'മരണം', 'Melakartha' : 'മേളകർത്താ', 'Arohanam' : 'ആരോഹണം', 'Avarohanam' : 'അവരോഹണം', 'Tala' : 'താളം', 'Tala name' : 'താളം പേര്', 'Tala angas' : 'താളം അംഗങ്ങൾ', 'Tala count' : 'താളം എണ്ണം', 'Language' :'ഭാഷ', 'God' : 'ദൈവം', 'English' : 'ഇംഗ്ലീഷ്', 'Tamil' : 'തമിഴ് ', 'Telugu' : 'തെലുങ്ക്', 'Kannada' : 'കന്നഡ', 'Malayalam' : 'മലയാളം', 'Sanskrit' : 'സംസ്കൃതം ' },
                  'Sanskrit' : { 'Search' : 'खोज', 'Playlist' : 'प्लेलिस्ट', 'References' : 'संदर्भ', 'Born' : 'जन्म', 'Died' : 'मरण', 'Melakartha' : 'मेलकर्ता', 'Arohanam' : 'आरोहण', 'Avarohanam' : 'अवरोही', 'Tala' : 'ताल', 'Tala name' : 'ताल नाम', 'Tala angas' : 'ताल आगा', 'Tala count' : 'ताल गिनती', 'Language' :'भाषा', 'God' : 'भगवान', 'English' : 'अंग्रेज़ी', 'Tamil' : 'तमिल', 'Telugu' : 'तेलुगु ', 'Kannada' : 'कन्नड़', 'Malayalam' : 'मलयालम', 'Sanskrit' : 'संस्कृत' },
                };

let script_input_map = new Map([['sanskrit', sanskrit_extended_expanded_list],
                          ['telugu', telugu_extended_expanded_list],
                          ['tamil', tamil_extended_expanded_list],
                          ['tamil_extended', tamil_extended_expanded_list],
                          ['kannada', kannada_extended_expanded_list],
                          ['malayalam', malayalam_extended_expanded_list],
                          ['sanskrit_extended', sanskrit_extended_expanded_list],
                          ['harvardkyoto', harvardkyoto_expanded_list],
                          ['harvardkyoto_tamil', harvardkyoto_tamil_expanded_list],
                          ['iso', iso_expanded_list],
                          ['iast', iast_expanded_list]
                         ]);

let script_output_map = new Map([['sanskrit', sanskrit_expanded_list],
                          ['telugu', telugu_expanded_list],
                          ['tamil', tamil_expanded_list],
                          ['tamil_extended', tamil_extended_expanded_list],
                          ['kannada', kannada_expanded_list],
                          ['malayalam', malayalam_expanded_list],
                          ['sanskrit_extended', sanskrit_extended_expanded_list],
                          ['harvardkyoto', harvardkyoto_expanded_list],
                          ['harvardkyoto_tamil', harvardkyoto_tamil_expanded_list],
                          ['iso', iso_expanded_list],
                          ['iast', iast_expanded_list],
                          ['english', harvardkyoto_expanded_list]
                         ]);

function range(m){
    let l = [];
    for (i=0; i<m; i++){
        l.push(i);
    }
    return l;
}

function range1(start, stop, increment){
    let l = [];
    for (i=start; i<stop; i+=increment){
        l.push(i);
    }
    return l;
}

function pairO(i,j){
    return i*1000+j;
}

function ntimes(s, n){
    let l = [];
    for (i=0;i<n;i++){
        l.push(s);
    }
    return l;
}

function sum(l){
    return l.reduce(function(i,j){return i+j;}, 0);
}

function newline2br(txt){
    return strip(txt).split('\n').join('<br/>')+"<br/>";
}

function strip(s){
    return s.replace(/^\s+|\s+$/gm, '');
}

function mapget(m, key, d){
    let r = d;
    if (m.has(key)){
        r = m.get(key);
    }
    return r;
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
        p = mapget(map, p, p);
        tokenlist.push(p);
        current += j;
    }
    return tokenlist.join('');
}

function preprocess_harvardkyoto_to_tamil(input_txt){
    let txt = input_txt;
    txt = txt.replace(/M([cj])/gm, 'J$1');
    txt = txt.replace(/M([kg])/gm, 'G$1');
    txt = txt.replace(/M([TD])/gm, 'N$1');
    txt = txt.replace(/M([td])/gm, 'n$1');        
    txt = txt.replace(/\bjJ/gm, 'J');
    txt = txt.replace(/jJ/gm, 'JJ');
    txt = txt.replace(/Jj/gm, 'Jc');
    txt = txt.replace(/_n/gm, 'qqqq');
    txt = txt.replace(/\bn/gm, "QQQQ");
    txt = txt.replace(/nd/gm, "QQQQd");
    txt = txt.replace(/nt/gm, "QQQQt");
    txt = txt.replace(/n/gm, '_n');
    txt = txt.replace(/QQQQ/gm, "n");
    txt = txt.replace(/qqqq/gm, "_n");
    return txt;
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

let ENG_INP_MAP = [ ' jJ', '\tjJ', '\njJ', 'jJ', 'Jc', 'Jj', 'Mc',
                    'Mj', 'Mk', 'Mg',  'MT', 'MD', 'Mt', 'Md',
                    'G', '_r', '_n', 'R', 'RR', 'lR', 'lRR', 'M'
                  ];

let ENG_OUT_MAP = [ ' jn', '\tjn', '\njn', 'gy', 'nc', 'nj', 'nc',
                    'nj', 'nk', 'ng', 'NT', 'ND', 'nt', 'nd',
                    'n', 'R',  'n', 'ru', 'rU', 'lu', 'lU', 'm'
                  ];

function get_transliterator_text(scriptInput, scriptOutput, data) {
    let result = '';
    var scriptOutput = scriptOutput.toLowerCase();
    let inlist = script_input_map.get(scriptInput);
    if (scriptInput == 'harvardkyoto_tamil') {
        if (scriptOutput == 'tamil') {
            res =  preprocess_harvardkyoto_tamil_to_tamil(data);
            result =  transliterate_map_text(lists_to_map(inlist, script_output_map.get('tamil')), res);
        } else {
            inlist =  [].concat(harvardkyoto_tamil_list, ['.N']);
            let out1 = [].concat(harvardkyoto_list, ['n']);
            let res = transliterate_map_text(lists_to_map(inlist, out1), data);
            result =  transliterate_map_text(lists_to_map(harvardkyoto_expanded_list,
                script_output_map.get(scriptOutput)), res);
            if (scriptOutput == 'english') {
                result = transliterate_map_text(lists_to_map(ENG_INP_MAP, ENG_OUT_MAP), result);
            }
        }
    } else {
        if (scriptOutput == 'tamil') {
            let out1 = script_output_map.get('harvardkyoto');
            let res = transliterate_map_text(lists_to_map(inlist, out1), data);
            res =  preprocess_harvardkyoto_to_tamil(res);
            result =  transliterate_map_text(lists_to_map(out1, script_output_map.get('tamil')), res);
        } else {
            let outlist = script_output_map.get(scriptOutput);
            result = transliterate_map_text(lists_to_map(inlist, outlist), data);
            if (scriptOutput == 'english') {
                result = transliterate_map_text(lists_to_map(ENG_INP_MAP, ENG_OUT_MAP), result);
            }
        }
    }
    let p = `${result}`;
    return(p);
}
