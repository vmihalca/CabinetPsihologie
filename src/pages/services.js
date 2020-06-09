import React from 'react'
import Layout from '../components/Layout'
import hcard1 from '../img/terap_indiv.png'
import hcard2 from '../img/Terap_grup.png'
import hcard3 from '../img/Dezv_pers.png'


const ServicesPage = () => {
    return (
        <Layout>
            <section className="section section--gradient serv-section">
                <div className="banner-serv"></div>
                <div className="serv-title">
                    <h2>Psihoterapie pentru adulti si copii</h2>
                </div>
                <div className="container">
                    <div className="columns">
                        <div className="column is-10 is-offset-1 serv-column">
                            <div className="serv-ban">
                                <h3>Ce este Psihoterapia?</h3>
                                <p>Poate te-ai întrebat ce este mai exact psihoterapia. Psihoterapia este o modalitate de a ajuta oamenii care suferă de o varietate de dificultăți emoționale și mentale. Prin acest proces esti ajutat în a-ți elimina sau controla anumite simptome deranjante și îngrijorătoare, astfel încât să acționezi mai bine, să te vindeci și să își ridici calitatea vieții.</p>
                                <h3>Care este diferenta intre psihiatru, psiholog si psihoterapeut?</h3>
                                <p>Un psihiatru este un specialist care a finalizat facultatea de medicină și specializarea în psihiatrie. Un pishiatru evaluează persoana, îi poate oferi un diagnostic și poate prescrie medicamente, însă nu e obligat să ofere terapie. Psihiatrul te poate ajuta în a afla dacă o problem mentală poate afecta alte probleme medicale, cum ar fi diabetul sau tensiunea arterială.</p>
                                <p>În schimb, terapeutul este un concept umbrelă care include consilieri, pshihologi sau psihoterapeuți, și este o persoană care a finalizat pregătirea profesională în sănătate mintală.</p>
                                <br/>
                                <p><strong>Consilierul </strong>se focualizează în general mai mult pe ceea ce se întâmplă în prezent (dificultăți la locul de muncă/acasă, un eveniment stresant specific, cum ar fi o despărțite etc). Un consilier se va uita la simptomele și comportamentul imediat (de ex., anxietate mai mare ca de obicei) și cum acest lucru îți afectează viața, mai mult decât să investigheze în profunzime trecutul sau copilăria. </p>
                                <br/>
                                <p><strong>Psihoterapia </strong>este similară cu consilierea, în ceea ce privește asigurarea unui mediu sigur pentru tine în a-ți împărtăși gândurile și îngrijorările, pentru a-ți gestiona dificultățile emoționale și paternurilor problematice de comportament. Totuși, abordarea este diferită în sensul în care psihoterapeutul va aborda lucrurile mult mai în profunzime. Psihoterapeutul se va focusa asupra emoțiilor și experiențelor trăite pe parcursul dezvoltării tale, fie ca și copil sau adult tânăr-  cât și asupra simptomelor și problemelor din prezent, pentru a înțelege cum aceste experiențe te-au mulat în persoana care ești astăzi. Din acest motiv psihoterapie este de obicei mai lungă comparativ cu consilierea și se va ocupa de condiții mentale mai complexe (depresie, tulburare de anxietate post-traumatică, etc.).</p>
                            </div>
                            <div id="psih-indiv" className="terap">
                                <img src={hcard1} alt="Terapie individuala" style={{ width: '300px' }} />
                                <h2>Psihoterapie individuală</h2>
                                <div className="line"></div>
                                <h3>Ce presupune?</h3>
                                <p className="presup">Psihoterapia individuală presupune întâlniri la care vei participa doar tu și psihoterapeutul, într-un spațiu plăcut și sigur. Tot ceea ce se discută rămâne confidential. Timpul unei întâlniri este de 1 oră, însă putem hotărî împreună întâlniri de o durată mai lungă.</p>
                                <br/>
                                <h3>Ce se va întâmpla?</h3>
                                <p>În întâlnirile noastre vom discuta ceea ce te apasă, vom explora emoțiile tale, tiparele de comportamente în care te simți prizonier și vom încerca împreună să găsim soluții pentru ceea ce te supără. Pentru a atinge aceste lucruri, vom discuta și amintirile din trecut, experiențe care sunt relevante pentru a înțelege problema cu care te confrunți în prezent. Scopul este de a-ți reda resursele pierdute și de a învăța să devii propriul consilier. Amândoi suntem implicați activ în acest proces de psihoterapie.</p>
                                <br/>
                                <h3>Când este recomandată psihoterapia individuală?</h3>
                                <p>Psihoterapia individuală este recomandată atunci când simțim că ceea ce ne deranjează ne împiedică să ne ducem responsabilitățile zilnice la bun sfârșit și ne împiedică să ne bucurăm de lucrurile care înainte ne făceau plăcere. 
                                    În aceste momente, când ne simțim prinși în același tipar comportamental și emoțional, ne ajută să discutăm o altă perspectivă asupra lucrurilor. Așa cum Alber Ellis a spus, ” Oamenii nu sunt afectați de ceea ce se întâmplă, ci de modul în care privesc și înțeleg ceea ce se întâmplă”.</p>
                                <br/>
                                <h3>Ce fel probleme tratează psihoterapia individuală?</h3>
                                <p>Psihoterapia poate ajuta într-o varietate largă de probleme, de la cele considerate mai ușoare, până la cele severe. Ne referim la dificultățile de a face față responsabilităților vieții, cât și impactului unei trauma, cum ar fi o problemă medicală sau pierderea unei persoane dragi. Dar psihoterapia se adresează și unor tulburări mentale specifice, cum ar fi depresia și anxietatea. </p>
                            </div>
                            <div id="psih-grup" className="content terap">
                                <img src={hcard2} alt="Terapie de grup" style={{ width: '350px' }} />
                                <h2>Psihoterapie de grup</h2>
                                <div className="line"></div>
                                <p>În psihoterapia de grup ne vom întâlni în grup de 6 și 10  persoane și vom discuta despre o anumită problemă. Cu toţii am crescut în diverse grupuri: grădiniţă, şcoală, grup de prieteni, familie, etc. Astfel, terapia de grup îţi oferă posibilitatea de a discuta o anumită temă cu o persoană specializată, într-un cadru cât mai asemănător cu mediul real. Într-un mediu sigur, îți vei putea împărtăși îngrijorările și problemele, fără a fi judecat sau criticat, în care vei putea beneficia de înțelegere, ajutor și suport din partea membrilor. Avantajul aceste forme de psihoterapie este faptul că îți oferă posibilitatea și de a-ți dezvolta aptitudinile sociale prin interacțiune cu ceilalți membrii, de a primi perspective noi și diverse asupra problemelor tale, cât și de a-ți oferi și propria perspectivă celorlalți într-un cadru cald și sigur. Aceste proces ajută la creșterea încrederii în sine și la înțelegerea faptului că nu suntem singuri.</p>
                                <h3>Grupurile pot avea ca subiect de discuţie:</h3>
                                <ul>
                                    <li>Probleme în relaţiile interpersonale</li>
                                    <li>Depresie şi/sau anxietate</li>
                                    <li>Probleme privind copiii şi adolescenţii</li>
                                    <li>Pierdere</li>
                                    <li>Trauma</li>
                                    <li>Probleme medicale</li>
                                </ul>
                            </div>
                            <div id="dezv-pers" className="content terap">
                                <img src={hcard3} alt="Terapie individuala" style={{ width: '350px' }} />
                                <h2>Dezvoltare personală</h2>
                                <div className="line"></div>
                                <h3>Ce presupune?</h3>
                                <p className="presup">Scopul este de a te susține în procesul de auto-explorare și dezvoltare a unor abilități specifice, pentru ca, în final, să îți îndeplinești propriul potențial. </p>
                                <br/>
                                
                                <p>Din nefericite, în societatea prezentă se pune multă greutate pe performanță și realizare, astfel încât ajungem să lucrăm peste program, în weekend, să ne validăm valoarea personală în funcție de succesele noastre. Ne îndepărtăm ușor de nevoile adevărate ale psihicului nostru. 
                                    Când, în final, ajungem să ne simțim frustrați, triști, cu sentimentul că ceva nu este așa cum ne-am dori în viața noastră, ne întoarcem lupa către noi și ne întrebăm ce se întâmplă. 
                                    Împreună, vom porni într-un proces conștient și asumat de auto-cunoaștere și înțelegere a propriilor calități și defecte. Important este să ne putem îmbrățișa propria persoană cu bune și cu rel,e pentru a putea acționa cât mai în accord cu nevoile și dorințele noastre, să putem să învățăm să acționăm sănătos pentru o viață mai împlinită.</p>
                                <ul>
                                    <li>Fobii</li>
                                    <li>Dependențe</li>
                                    <li>Tulburări de personalitate</li>
                                    <li>Anxietate</li>
                                    <li>Depresie</li>
                                    <li>Managementul furiei</li>
                                    <li>Cateva cuvinte la fiecare si poze</li>
                                </ul>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
        
    )
}

export default ServicesPage