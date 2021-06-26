# Guida per l'utente

Si prega di leggere e accettare il nostro Termini di servizio e Dichiarazione sulla privacyy, quindi passare alla fase successiva. Una volta fatto ciò, significa che siete d'accordo con il nostro Termini di servizio e Dichiarazione sulla privacy.

L'uso di FastGit è fondamentalmente riferito a `git` . Per le comuni operazioni di GitHub, puoi usare il comando `clone` come:

```bash
git clone https://github.com/author/repo
```

Per usare FastGit, lo si cambia in:

```bash
git clone https://hub.fastgit.org/author/repo
```

Proprio come quello che vedi, FastGit è fisicamente un proxy di GitHub, e quello che devi fare è semplicemente sostituire l'URL.

Puoi anche modificare le configurazioni di `git` per prendere un modo più semplice di usare il nostro servizio.

Puoi anche cambiare la configurazione di `git` direttamente, sostituendo il link di GitHub interamente con FastGit:

```bash
git config --global url."https://hub.fastgit.org/".insteadOf "https://github.com/"
git config protocol.https.allow always
```

:::warning Nota
Non dimentichi di controllare se FastGit è giù quando risolve errori di rete, anche se offriamo garanzie SLA fino allo 0% di disponibilità.
:::

:::warning Nota
Dopo l'accensione dell'FA2 non riuscirete a spingere o a fare altre operazioni che richiedono la vostra autorizzazione. (Qualunque sia il token di accesso utilizzato come password) Questo è causato dalla standardizzazione di GitHub.
:::

Con la crescita di FastGit, dispiegheremo più risorse per supportare il nostro servizio di velocizzazione. Puoi trovare la lista dei nostri nodi nel capitolo [Nodes](../it-it/node.html).

## L'uso del Web

FastGit fornisce anche i supporti di base per le comuni operazioni Web di GitHub. È possibile accedere direttamente ai nodi con i supporti Web.

A causa dei problemi di sicurezza, abbiamo vietato cose sensibili, come `Cookie` e `Session` . Questo significa che non sei in grado di fare operazioni sensibili come la firma in GitHub tramite FastGit.

## Scarica i comunicati o l'archivio del codice sorgente

Per le comuni operazioni di "clone" e "push", FastGit ha già fornito un supporto perfetto. Possiamo usare il comando qui sotto per scaricare i comunicati e l'archivio del codice sorgente.

```bash
# Release
# Se il tuo link di downalod è: https://github.com/A/A/releases/download/1.0/1.0.tar.gz , allora lo usi:
wget https://download.fastgit.org/A/A/releases/download/1.0/1.0.tar.gz

# Codeload
# Se il vostro link per il download è: https://hub.fastgit.org/A/A/archive/master.zip
# o https://codeload.github.com/A/A/zip/master
wget https://download.fastgit.org/A/A/archive/master.zip
```

## SSH Operazione

~~Supportiamo anche il clone SSH. Basta sostituire github.com a fastgit.org per godere.~~~

~~A causa di alcuni fattori irrefrenabili, non forniamo il servizio di clonazione SSH.~~

26/06/2021 Aggiornamento: Poiché il problema 2FA persiste, è difficile ottenere molto tramite HTTPS. Vista la situazione attuale, abbiamo continuato il servizio di funzionamento SSH.

A differenza di prima, abbiamo diviso il dominio dove si trova il servizio SSH, in altre parole non è possibile lavorare sostituendo l'indirizzo con FastGit.org.

Il nostro indirizzo di funzionamento SSH è **ssh.fastgit.org**, e possiamo velocizzare le cose semplicemente sostituendo l'indirizzo.

## Per il proxy raw

Abbiamo anche il proxy per <https://raw.githubusercontent.com/> .  
L'URL è: <https://raw.fastgit.org/> .

## Cosa fare se hai problemi con FastGit

1. Assicurati che la tua rete e il tuo DNS funzionino correttamente
2. Controlla <https://status.fastgit.org> e <https://github.com/FastGitORG/uptime> per confermare se FastGit sta affrontando una potenziale indisponibilità del servizio
3. Cambia il tuo DNS al DNS pubblico AliPublic per evitare potenziali problemi di inquinamento del DNS
4. Prova a comunicare con l'IP di FastGit tramite Tcpping

Quando hai la conferma che FastGit è o è potenzialmente indisponibile, contattaci.
Puoi comunicarci inviando un'email a [admin@fastgit.org](mailto:admin@fastgit.org), aprendo un problema alla nostra discussione <https://github.com/FastGitORG/discussion>, o tramite il gruppo di messaggistica istantanea Telegram [@FastGit](https://t.me/fastgit).

:::tip Suggerimento
È importante notare che il PING non determina se un server non è disponibile. Si consiglia di utilizzare Tcpping per rilevare la porta 443.
:::
