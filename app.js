'use strict';
// Alle Inhalte können hier direkt bearbeitet werden. Keine Bibliotheken, kein Tracking.
const cards = [
  {
    topic:'DATENSAMMLUNG',speaker:'Philipp',
    question:'Welche Vor- und Nachteile hat Datensammlung? Welche Gefahren werden unterschätzt?',
    cues:['Vorteile: Navigation, Fortschritt Medizin','Nachteile: Persönlichkeitsprofile mit Likes o. Ä.'],
    answer:'Datensammlung hat natürlich viele Vorteile. Sie ermöglicht zum Beispiel Navigation, personalisierte Angebote oder Fortschritte in der medizinischen Forschung. Problematisch wird es aber, wenn mehr Daten gesammelt werden als eigentlich nötig. Denn aus vielen einzelnen Informationen, zum Beispiel unseren Suchanfragen, Likes oder Standorten, lassen sich ziemlich genaue Persönlichkeitsprofile erstellen. Diese können dann nicht nur für Werbung genutzt werden, sondern im schlimmsten Fall auch, um Menschen gezielt zu beeinflussen. Was dabei oft unterschätzt wird, ist, wie viel selbst scheinbar harmlose Informationen über uns verraten. Ich finde, man kann das ganz gut mit Vorhängen am Fenster vergleichen: Nur weil ich nichts zu verbergen habe, heißt das ja nicht, dass jeder alles über mich wissen muss.',
    intro:'Der entscheidende Punkt ist nicht nur die einzelne Information, sondern die Verknüpfung vieler Daten.',
    details:[['Nützliche Anwendungen','Verkehrsdaten können Staus vermeiden helfen; Gesundheitsdaten können in geeigneten Forschungsprojekten Erkenntnisse ermöglichen.'],['Profilbildung','Aus Standortverläufen, Suchanfragen und Interessen lassen sich mögliche Gewohnheiten und Vorlieben ableiten – auch ohne dass diese direkt abgefragt werden.'],['Nicht alles ist Manipulation','Personalisierte Werbung ist nicht automatisch Manipulation. Kritisch wird es bei undurchsichtiger Beeinflussung, Diskriminierung oder unangemessener Profilbildung.']],
    resources:[['Europäischer Datenschutzausschuss · Grundsätze','https://www.edpb.europa.eu/topics/key-gdpr-concepts/basic-principles_en'],['klicksafe · Digitale Medien verstehen','https://www.klicksafe.de/']],
    tip:'Wenn ihr mehr darüber wissen möchtet, wie sich einzelne Datenspuren zu Profilen zusammensetzen, schaut auf klicksafe.de.'
  },
  {
    topic:'RECHTSGRUNDLAGEN',speaker:'Simon',
    question:'Gibt es Daten, deren Sammlung Sie auch ohne ausdrückliche Zustimmung vertretbar finden?',
    cues:['Onlinebestellung','Gesetzliche Notwendigkeit','Klare Grenzen'],
    answer:'Ja, auf jeden Fall. Es gibt Situationen, in denen die Verarbeitung von Daten auch ohne ausdrückliche Zustimmung notwendig und gerechtfertigt ist. Wenn ich beispielsweise etwas online bestelle, muss der Händler meine Adresse kennen, damit er mir das Paket liefern kann. Auch bei gesetzlichen Verpflichtungen oder in bestimmten Notfällen kann das sinnvoll sein. Entscheidend ist dabei aber, dass es eine rechtliche Grundlage gibt und nur die Daten verwendet werden, die für den jeweiligen Zweck wirklich gebraucht werden. Nur weil ein Unternehmen bestimmte Daten sammeln kann, bedeutet das schließlich nicht, dass es diese auch sammeln sollte.',
    intro:'Die DSGVO kennt mehrere Rechtsgrundlagen. Einwilligung ist nur eine Möglichkeit.',
    details:[['Sechs Rechtsgrundlagen','Dazu zählen unter anderem Einwilligung, Vertragserfüllung, rechtliche Verpflichtung und der Schutz lebenswichtiger Interessen.'],['Datensparsamkeit','Für den Versand braucht ein Shop eine Lieferadresse – nicht automatisch Informationen über die Gesundheit oder den Freundeskreis.'],['Tracking ist etwas anderes','Für viele nicht notwendige Zugriffe auf Informationen im Endgerät, etwa Tracking-Cookies, ist zusätzlich eine Einwilligung erforderlich.']],
    resources:[['EU-Datenschutzausschuss · Rechtsgrundlagen','https://www.edpb.europa.eu/topics/key-gdpr-concepts/legal-basis_de'],['EU-Datenschutzausschuss · Praxisleitfaden','https://www.edpb.europa.eu/sme/be-compliant/process-personal-data-lawfully_de']],
    tip:'Wer genauer wissen möchte, wann Unternehmen Daten ohne Einwilligung verarbeiten dürfen, findet eine gute Übersicht beim Europäischen Datenschutzausschuss auf edpb.europa.eu.'
  },
  {
    topic:'SUCHMASCHINEN',speaker:'Philipp',
    question:'Welche Websites und Suchmaschinen gelten als sicher und sammeln wenige Daten?',
    cues:['Alternative Suchmaschinen','Keine Garantie','Verschlüsselung','DuckDuckGo'],
    answer:'Es gibt mittlerweile einige gute Alternativen zu den großen Suchmaschinen, die besonderen Wert auf Datenschutz legen. Beispiele dafür sind DuckDuckGo, Startpage oder Brave Search. Diese versuchen, möglichst wenige persönliche Daten zu sammeln und keine umfangreichen Nutzerprofile anzulegen. Allerdings sollte man bedenken, dass keine Website vollständige Anonymität garantieren kann. Wichtig ist deshalb auch, auf die Datenschutzeinstellungen zu achten und zu überlegen, welche Informationen man auf einer Website preisgibt. Und was viele nicht wissen: Nur weil eine Website eine verschlüsselte Verbindung hat, bedeutet das noch lange nicht, dass sie keine Daten über ihre Besucher sammelt.',
    intro:'Datenschutz, IT-Sicherheit und Anonymität sind drei verschiedene Dinge.',
    details:[['Datenschutzorientierte Suche','DuckDuckGo, Startpage und Brave Search stellen Datenschutz in den Vordergrund; Geschäftsmodelle und technische Umsetzung unterscheiden sich.'],['Das Schloss im Browser','HTTPS schützt die Übertragung zwischen Browser und Website. Es sagt allein nichts darüber aus, was der Betreiber anschließend protokolliert.'],['Worauf achten?','Ist eine Anmeldung nötig? Werden Profile erstellt? Welche Cookies und Drittanbieter kommen zum Einsatz?']],
    resources:[['Privacy Guides · Suchmaschinen','https://www.privacyguides.org/en/search-engines/'],['klicksafe · Datenschutz','https://www.klicksafe.de/']],
    tip:'Wenn ihr Suchmaschinen vergleichen wollt, die Datenschutz besonders berücksichtigen, lohnt sich ein Blick auf privacyguides.org.'
  },
  {
    topic:'SELBSTSCHUTZ',speaker:'Simon',
    question:'Welche konkreten Möglichkeiten haben wir, unsere Daten zu schützen?',
    cues:['Kontosicherheit','App-Berechtigungen','Soziale Medien'],
    answer:'Es gibt einige relativ einfache Möglichkeiten, mit denen jeder seine Daten besser schützen kann. Besonders wichtig sind sichere, unterschiedliche Passwörter und die Zwei-Faktor-Authentifizierung. Außerdem sollte man seine Geräte und Apps regelmäßig aktualisieren. Ein weiterer Punkt sind die App-Berechtigungen. Eine Taschenlampen-App braucht zum Beispiel normalerweise keinen Zugriff auf meine Kontakte oder meinen Standort. Auch bei sozialen Medien sollte man darauf achten, was man veröffentlicht und wer die eigenen Beiträge sehen kann. Man muss also nicht komplett auf digitale Angebote verzichten, sondern sollte sie einfach bewusster nutzen. Schon kleine Veränderungen können einen großen Unterschied machen.',
    intro:'Die wirksamsten Maßnahmen sind oft überraschend unkompliziert.',
    details:[['Ein Passwort pro Konto','Ein Passwortmanager kann lange, einzigartige Passwörter erstellen und verwalten. Wo möglich, sind auch Passkeys eine gute Option.'],['Zweiter Faktor','Zwei-Faktor-Anmeldung erschwert Fremden den Kontozugriff, selbst wenn ein Passwort bekannt geworden ist.'],['Vor dem Veröffentlichen','Bei Fotos auf Kennzeichen, Adressen, Schulnamen oder andere Personen im Bild achten – und vor dem Teilen um Erlaubnis fragen.']],
    resources:[['Verbraucherzentrale · Passwortmanager','https://www.verbraucherzentrale.de/wissen/digitale-welt/datenschutz/sind-passwortmanager-sinnvoll-114154'],['Verbraucherzentrale · Zwei-Faktor-Anmeldung','https://www.verbraucherzentrale.de/wissen/digitale-welt/datenschutz/zweifaktorauthentisierung-so-schuetzen-sie-ihre-accounts-85173']],
    tip:'Wenn ihr gleich heute etwas verbessern wollt, schaut bei verbraucherzentrale.de nach Passwortmanagern und Zwei-Faktor-Anmeldung.'
  },
  {
    topic:'GESETZE',speaker:'Philipp',
    question:'Welche Gesetze zum Schutz von Daten gibt es? Wo muss nachgebessert werden? Wo entstehen Interessenkonflikte?',
    cues:['DSGVO','Jugendschutz','Interessenkonflikte'],
    answer:'In Europa ist vor allem die Datenschutz-Grundverordnung, also die DSGVO, wichtig. Sie regelt, wie Unternehmen mit persönlichen Daten umgehen dürfen, und gibt uns beispielsweise das Recht, zu erfahren, welche Daten über uns gespeichert werden. In Deutschland gibt es zusätzlich das Bundesdatenschutzgesetz und weitere Regelungen. Ein wichtiger Punkt ist auch der Schutz von Kindern und Jugendlichen. So schränkt der europäische Digital Services Act beispielsweise gezielte Werbung an Minderjährige auf Online-Plattformen ein. Das Problem ist aus unserer Sicht weniger, dass es zu wenige Gesetze gibt, sondern dass deren Einhaltung oft schwer zu kontrollieren ist. Dabei entstehen natürlich Interessenkonflikte: Unternehmen verdienen mit Daten Geld, während Nutzer ihre Privatsphäre schützen möchten. Hier muss die Politik klare Grenzen setzen.',
    intro:'Datenschutz ist ein Grundrechtsthema – und in der Praxis eine Frage der Umsetzung.',
    details:[['Rechte nach DSGVO','Betroffene haben insbesondere Rechte auf Information und Auskunft sowie unter bestimmten Voraussetzungen auf Berichtigung und Löschung.'],['Schutz Minderjähriger','Der Digital Services Act untersagt Plattformen profilbasierte Werbung an Minderjährige, wenn sie mit hinreichender Sicherheit wissen, dass der Nutzer minderjährig ist.'],['Typischer Konflikt','Wirtschaftliche Interessen an Personalisierung treffen auf Privatsphäre; zugleich können Forschung und staatliche Aufgaben berechtigte Datenbedarfe haben.']],
    resources:[['EU-Kommission · Gesetz über digitale Dienste','https://commission.europa.eu/news-and-media/news/digital-services-act-keeping-us-safe-online-2025-09-22_de'],['EU-Datenschutzausschuss · Grundlagen','https://www.edpb.europa.eu/topics/key-gdpr-concepts/basic-principles_en']],
    tip:'Wenn ihr wissen möchtet, welche Rechte ihr selbst gegenüber Unternehmen habt, schaut beim Europäischen Datenschutzausschuss auf edpb.europa.eu vorbei.'
  },
  {
    topic:'KÜNSTLICHE INTELLIGENZ',speaker:'Simon',
    question:'Was verändert KI am Datenschutz, was bisherige Technologien noch nicht verändert haben?',
    cues:['Datenanalyse','Persönliche Rückschlüsse','KI-Eingaben'],
    answer:'Künstliche Intelligenz verändert vor allem, wie schnell und umfassend Daten ausgewertet werden können. KI kann riesige Datenmengen analysieren und daraus Zusammenhänge erkennen, die für Menschen nur schwer zu entdecken wären. Dadurch lassen sich teilweise sogar Informationen über Personen ableiten, die diese selbst nie ausdrücklich angegeben haben, zum Beispiel persönliche Interessen oder bestimmte Verhaltensweisen. Ein weiteres Thema ist, dass viele Menschen heute ganz selbstverständlich private Informationen in KI-Anwendungen wie ChatGPT eingeben, ohne genau zu wissen, wie diese verarbeitet werden. KI bietet natürlich auch große Chancen, etwa in der Medizin. Gleichzeitig müssen wir aber stärker darauf achten, welche Daten wir solchen Systemen anvertrauen.',
    intro:'KI macht Datenanalyse in einem neuen Ausmaß zugänglich – die Regeln zum Umgang mit Daten bleiben wichtig.',
    details:[['Abgeleitete Informationen','Aus vielen scheinbar unauffälligen Signalen kann ein Modell statistische Vermutungen über Eigenschaften oder Gewohnheiten einer Person bilden. Solche Vermutungen können auch falsch sein.'],['Vertrauliche Eingaben','Bei KI-Diensten sollte man vor dem Hochladen von Schulunterlagen, Fotos, Kundendaten oder Gesundheitsinformationen prüfen, wie der jeweilige Anbieter die Inhalte verarbeitet.'],['Auch positive Anwendungen','Zum Beispiel Spracherkennung, automatische Untertitel oder die Auswertung geeigneter medizinischer Forschungsdaten.']],
    resources:[['Europäischer Datenschutzausschuss · KI und Datenschutz','https://www.edpb.europa.eu/'],['klicksafe · Künstliche Intelligenz','https://www.klicksafe.de/kuenstliche-intelligenz']],
    tip:'Wenn ihr euch fragt, welche Risiken KI für eure Daten hat, findet ihr bei klicksafe.de verständliche Informationen rund um künstliche Intelligenz.'
  },
  {
    topic:'BILDUNG',speaker:'Philipp',
    question:'Wie kann man Datenschutz schon früh vermitteln?',
    cues:['Früh anfangen','Praktische Beispiele','Selbst verstehen'],
    answer:'Wir finden, dass Datenschutz schon früh in der Schule vermittelt werden sollte, weil Kinder und Jugendliche heute ganz selbstverständlich mit digitalen Medien aufwachsen. Dabei sollte es aber nicht darum gehen, ihnen einfach nur Angst vor dem Internet zu machen. Viel sinnvoller wäre es, mit praktischen Beispielen zu arbeiten. Man könnte etwa gemeinsam überprüfen, welche Berechtigungen bestimmte Apps haben oder welche Informationen ein scheinbar harmloses Instagram-Foto preisgibt. Besonders interessant wäre auch, aus verschiedenen Likes, Suchanfragen und Standorten ein fiktives Persönlichkeitsprofil zu erstellen. So verstehen Jugendliche selbst, wie viel man aus einzelnen Daten herausfinden kann und warum Datenschutz überhaupt wichtig ist.',
    intro:'Ein gutes Lernangebot macht Datensammlung sichtbar, ohne Kinder und Jugendliche zu verängstigen.',
    details:[['Kleine Praxisübung','Ein erfundenes Profil aus drei Posts, fünf Likes und Standortangaben zusammenstellen. Welche Vermutungen lassen sich daraus ableiten?'],['Bilder mitdenken','Ein Selfie kann mehr zeigen als nur das Gesicht: Schulname, Adresse, Geodaten oder andere Personen.'],['Vorsicht bei echten Daten','Für Übungen ausschließlich fiktive Profile oder ausdrücklich freigegebene Beispieldaten verwenden.']],
    resources:[['klicksafe · Materialien und Tipps','https://www.klicksafe.de/'],['Internet-ABC · Sicher im Internet','https://www.internet-abc.de/']],
    tip:'Wenn ihr selbst eine Schulaktion zum Datenschutz machen möchtet, findet ihr auf klicksafe.de viele Ideen und Unterrichtsmaterialien.'
  },
  {
    topic:'FAZIT',speaker:'Simon',
    question:'Ist Datenschutz heute noch möglich – oder müssen wir immer mehr persönliche Daten freigeben?',
    cues:['Weiterhin möglich','Gemeinsame Verantwortung','Freiheit'],
    answer:'Wir sind der Meinung, dass Datenschutz auch heute noch möglich ist, allerdings ist er durch die Digitalisierung deutlich schwieriger geworden. Natürlich lässt es sich kaum vermeiden, bei der Nutzung digitaler Dienste bestimmte Daten preiszugeben. Entscheidend ist aber, zwischen wirklich notwendigen Daten und solchen zu unterscheiden, die Unternehmen zusätzlich sammeln möchten. Dabei liegt die Verantwortung nicht nur bei uns als Nutzern. Auch Unternehmen müssen verantwortungsvoll mit Daten umgehen und die Politik muss klare Regeln schaffen. Denn Datenschutz bedeutet nicht nur, persönliche Informationen geheim zu halten. Es geht auch um unsere Freiheit und darum, selbst entscheiden zu können, wer was über uns weiß. Deshalb sollten wir uns nicht daran gewöhnen, unsere Privatsphäre einfach aufzugeben, nur um digitale Angebote nutzen zu können.',
    intro:'Datenschutz ist kein Gegensatz zur Digitalisierung, sondern eine Voraussetzung für Vertrauen.',
    details:[['Nicht alles oder nichts','Manche Daten sind für einen Dienst notwendig; zusätzliches Tracking ist nicht automatisch erforderlich.'],['Verantwortung teilen','Nutzer können Einstellungen prüfen. Anbieter müssen Dienste rechtmäßig und möglichst datensparsam gestalten; Aufsichtsbehörden kontrollieren die Einhaltung.'],['Mehr als Geheimhaltung','Datenschutz unterstützt Selbstbestimmung und den Schutz vor unangemessener Überwachung, Profilbildung und Diskriminierung.']],
    resources:[['EU-Datenschutzausschuss · Grundprinzipien','https://www.edpb.europa.eu/topics/key-gdpr-concepts/basic-principles_en'],['klicksafe · Privatsphäre und Datenschutz','https://www.klicksafe.de/']],
    tip:'Wenn ihr euer eigenes digitales Verhalten hinterfragen wollt, schaut auf klicksafe.de – dort gibt es praktische Tipps, wie ihr eure Privatsphäre besser schützen könnt.'
  }
];

const $ = (id) => document.getElementById(id);
let current = 0;
let activeOverlay = null;
let lastFocus = null;
const initial = Number.parseInt(new URLSearchParams(location.search).get('karte') || '1', 10);
if(Number.isInteger(initial) && initial >= 1 && initial <= cards.length) current = initial - 1;

function el(tag, className, textContent){const node=document.createElement(tag);if(className)node.className=className;if(textContent!==undefined)node.textContent=textContent;return node;}
function render(){
 const card=cards[current];
 $('speaker-name').textContent=card.speaker.toUpperCase();
 $('speaker-tag').classList.toggle('simon',card.speaker==='Simon');
 $('topic-label').textContent=card.topic;
 $('top-progress').textContent=String(current+1).padStart(2,'0')+' / '+String(cards.length).padStart(2,'0');
 $('question-number').textContent=String(current+1).padStart(2,'0');
 $('question').textContent=card.question;
 $('cues').replaceChildren(...card.cues.map(c=>el('span','cue',c)));
 $('answer').textContent='„'+card.answer+'“';
 $('prev-button').disabled=current===0;
 $('next-button').disabled=current===cards.length-1;
 $('next-label').textContent=current===cards.length-1?'Ende':'Weiter';
 $('steps').replaceChildren(...cards.map((c,i)=>{const b=el('button','step'+(i===current?' active':''));b.type='button';b.setAttribute('aria-label','Zu Frage '+(i+1));b.setAttribute('aria-current',i===current?'step':'false');b.addEventListener('click',()=>go(i));return b;}));
 history.replaceState(null,'',location.pathname+'?karte='+(current+1)+location.hash);
}
function go(index){if(index<0||index>=cards.length)return;current=index;render();}
function openOverlay(type){if(activeOverlay)return;lastFocus=document.activeElement;activeOverlay=type;const overlay=$(type+'-overlay');
 if(type==='details') renderDetails(); else renderOverview();
 overlay.hidden=false;document.body.classList.add('modal-open');overlay.querySelector('.sheet').focus();}
function closeOverlay(){if(!activeOverlay)return;$(activeOverlay+'-overlay').hidden=true;activeOverlay=null;document.body.classList.remove('modal-open');if(lastFocus&&lastFocus.focus)lastFocus.focus();}
function renderDetails(){const card=cards[current];$('details-title').textContent='Frage '+(current+1)+' · Vertiefung';$('detail-intro').textContent=card.intro;
 $('detail-list').replaceChildren(...card.details.map(([heading,copy])=>{const node=el('div','detail-item');node.append(el('strong','',heading),el('div','',copy));return node;}));
 $('resources').replaceChildren(...card.resources.map(([label,url])=>{const a=el('a','resource-link');a.href=url;a.target='_blank';a.rel='noopener noreferrer';a.append(el('span','resource-name',label),el('span','', '↗ Öffnen'));return a;}));
 $('detail-tip').textContent='„'+card.tip+'“';}
function renderOverview(){$('overview-list').replaceChildren(...cards.map((card,i)=>{const b=el('button','overview-entry'+(i===current?' current':''));b.type='button';b.append(el('span','overview-index',String(i+1).padStart(2,'0')),el('span','overview-title',card.question),el('span','overview-person',card.speaker.toUpperCase()));b.addEventListener('click',()=>{closeOverlay();go(i);});return b;}));}
$('prev-button').addEventListener('click',()=>go(current-1));
$('next-button').addEventListener('click',()=>go(current+1));
$('details-button').addEventListener('click',()=>openOverlay('details'));
$('overview-button').addEventListener('click',()=>openOverlay('overview'));
document.querySelectorAll('[data-close]').forEach(node=>node.addEventListener('click',closeOverlay));
document.addEventListener('keydown',(event)=>{
 if(event.key==='Escape' && activeOverlay){closeOverlay();return;}
 if(activeOverlay){if(event.key==='Tab'){const focusable=[...$(activeOverlay+'-overlay').querySelectorAll('button:not(:disabled),a[href]')];if(!focusable.length)return;const first=focusable[0],last=focusable[focusable.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}}return;}
 if(event.key==='ArrowRight'||event.key==='PageDown'){event.preventDefault();go(current+1);}
 if(event.key==='ArrowLeft'||event.key==='PageUp'){event.preventDefault();go(current-1);}
 if(event.key.toLowerCase()==='i' && !event.metaKey && !event.ctrlKey)openOverlay('details');
});
let touchStart=null;
$('stage').addEventListener('touchstart',e=>{if(e.touches.length!==1)return;touchStart={x:e.touches[0].clientX,y:e.touches[0].clientY};},{passive:true});
$('stage').addEventListener('touchend',e=>{if(!touchStart||activeOverlay)return;const dx=e.changedTouches[0].clientX-touchStart.x,dy=e.changedTouches[0].clientY-touchStart.y;touchStart=null;if(Math.abs(dx)>75&&Math.abs(dx)>Math.abs(dy)*1.4)go(current+(dx<0?1:-1));},{passive:true});
render();
