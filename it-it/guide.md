# Guida per l'utente

Si prega di leggere e accettare il nostro Termine di servizio, quindi passare alla fase successiva. Una volta fatto ciò, significa che siete d'accordo con il nostro Termine del servizio.

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

## SSH Clone

~~Supportiamo anche il clone SSH. Basta sostituire github.com a fastgit.org per godere.~~~

A causa di alcuni fattori irrefrenabili, non forniamo il servizio di clonazione SSH.

## Per il proxy grezzo

Abbiamo anche il proxy per <https://raw.githubusercontent.com/> .  
L'URL è: <https://raw.fastgit.org/> .
