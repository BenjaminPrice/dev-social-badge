# DEV Social Badge
<p align="left">
<img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/BenjaminPrice/dev-social-badge?style=flat-square"> <a href="CONTRIBUTING.md"><img alt="Contributions to DEV Widget are welcomed" src="https://img.shields.io/badge/contributions-welcome-brightgreen?style=flat-square"></a>
</p>
Unofficial Social Badge for DEV.to

A social badge that pulls your reaction count for an article that’s been shared on DEV

---

## CDNJS

Help me get this hosted on CDNJS by giving the repository a `star`. I require at least 800 stars to submit to CDNJS.

---

## Installation and Usage

### Adding the script tag to the HEAD

```html
    <!-- Place script tag before the end of the head tag -->
    <script src="https://unpkg.com/dev-social-badge@0.1.0/dist/dev-social-badge.min.js"></script>
```

### Adding the devbadge and script tags to the BODY
_If you're using a template for your blog posts, I suggest adding this to the template file for your blog posts - not your main site layout._ This will help to reduce unnecessary API calls to [DEV.to](https://dev.to/).

```html
    <!-- Place devbadge tag wherever you'd like the badge to appear -->
    <devbadge />
    <!-- Place script tag before the end of the body tag -->
    <script>window.onload = function(){typeof findOnDev !== "undefined" && findOnDev()}</script>
```

---

## Meta Tag Guide

| attributes    | description                   | default                  | required                 | 
|---------------|-------------------------------|--------------------------|--------------------------|
| dev:username  | Your DEV.to Username          | N/A                      | true                     |

Example of a meta tag:
```html
<meta name="dev:username" content="benjaminjprice" />
```
---

## Changelog
**[RELEASES](https://github.com/BenjaminPrice/dev-social-badge/releases)**

---

## Contributing

I'm still getting things started. As such, there aren't any/many issues created yet. But, you can always checkout [CONTRIBUTING.md](CONTRIBUTING.md) for Contribution guidelines.