# Guide d'utilisation

Veuillez accepter nos conditions de l'accord de services et politique de confidentialité avant de passer à l'étape suivante. Si vous continuez, on gère votre action comme les accepter par défaut.

Par rapport à l'utilisation de FastGit, c'est généralement lié à `git`. La commande "clone" utilisé pour GitHub peut être la suivante :

```bash
git clone https://github.com/author/repo
```

Quand vous utilisez FastGit, vous pouvez utiliser cette commande:

```bash
git clone https://hub.fastgit.xyz/author/repo
```

Comme vous pouvez le voir, FastGit n'est qu'un proxy pour GitHub, nous n'avons donc qu'à remplacer l'URL.

Vous pouvez aussi changer la configuration de `git` pour remplacer toutes les addresses de GitHub à FastGit:

```bash
git config --global url."https://hub.fastgit.xyz/".insteadOf "https://github.com/"
git config protocol.https.allow always
```

:::warning Attention
Lorsque vous dépannez des erreurs de réseau, n'oubliez pas de voir si FastGit est en panne, même si nous offrons une garantie SLA jusqu'à 0% de disponibilité.
:::

:::warning Attention
Quand vous utilisez l'authentification à deux facteurs, les action qui ont besoin de votre authentification comme push va être refusées, sauf que vous utiliser les [jetons d'accès](https://github.com/settings/tokens).
:::

:::warning Attention
Nous ne prenons actuellement pas en charge de `clone` des entrepôts de plus de 2 Gio, référez à <https://github.com/FastGitORG/nginx-conf/issues/14> et <https://github.com/FastGitORG/nginx-conf/commit/61a41bc0bbb012fc9a6e54b198a10874eeaf9309>.
:::

Nous ne vous décourage pas à modifier la configuration de git pour faciliter votre travail.

Au fur et à mesure que FastGit grandit, nous aurons plus de ressources pour l'accélération. Pour la liste des nœuds, veuillez vous référer au chapitre [Nœud](../zh-cn/node.html).

## Utilisation du Web

Pour les opérations de GitHub sur Web communes, les nœuds de base de FastGit a fournit également le support de base. Vous pouvez accéder les nœuds ayant le support de Web. Pour les raisons sécuritaires, on a désactivé les autorisations sensibles comme «Cookie» et «Session». Cela veut dire que vous ne pouvez pas connecter à votre compte pour les opérations.

## Télécharger une édition de logiciel et l'archive du code source

Pour les opérations comme `clone` et `push`, FastGit a fournit des opérations assez complètes. Pour télécharger les éditions de logiciel et les archives du code source, on peut utiliser ces opérations:

```bash
# Édition de logiciel
# Si le lien de téléchargement est: https://github.com/A/A/releases/download/1.0/1.0.tar.gz
wget https://download.fastgit.xyz/A/A/releases/download/1.0/1.0.tar.gz

# Codeload
# Si le lien de téléchargement est: https://hub.fastgit.org/A/A/archive/master.zip
# Ou https://codeload.github.com/A/A/zip/master
wget https://download.fastgit.org/A/A/archive/master.zip
```

## Opération SSH

~~On support aussi le clone SSH, vous avez seulement besoin de changer l'adresse à fastgit.org.~~

~~En raison de facteurs irrésistibles, nous ne supportont pas le clone SSH pour le moment.~~

Mise à jour le 26 juin 2021: À cause que le problème de l'authentification à deux facteurs est encore là, c'est difficile pour nous de compléter beaucoup d'opérations avec HTTPS. Pour cette situation, nous continuons à ouvrir le portail d'opération SSH.

Contrairement à avant, nous avons séparé la domaine où se trouve le service SSH, c'est-à-dire que vous ne pouvez pas faire des opérations en remplaçant l'adresse par FastGit.org.

Pour le moment, notre addresse SSH est **ssh.fastgit.org**. Vous avez juste besoin de remplacer l'addresse.

## Pour le proxy de raw.

Nous avons aussi fournit le proxy de <https://raw.githubusercontent.com/>, l'adresse est <https://raw.fastgit.org/>.

## Qu'est-ce que vous avez besoin de faire quand vous avez des problèmes de FastGit

1. Assurer que votre internet et DNS marche bien.
2. Voir <https://status.fastgit.org> et <https://github.com/FastGitORG/uptime> pour confirmer est-ce que FastGit face à une risque d'indisponibilité du service
3. Changer votre DNS à AliPublic public DNS pour éviter le risque d'empoisonnement du cache DNS.
4. Utiliser Tcpping pour essayer de communiquer avec FastGit IP

Si vous confirmer que FastGit n'est pas disponible ou avoir le risque d'indisponibilité, veuillez nous contacter.
Vous pouvez nous envoyer une courriel à [admin@fastgit.org](mailto:admin@fastgit.org), aller chez notre espace de discussion <https://github.com/FastGitORG/discussion> et ouvrir un issue, ou contactez-nous dans notre groupe Telegram [@FastGit](https://t.me/fastgit).

:::tip Conseil
Attention, PING ne peut pas vous indiquer si le service est disponible. Nous recommandons d'utiliser Tcpping pour détecter le port 443.
:::
