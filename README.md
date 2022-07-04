# OffsideAI

* OffsideAI is an Open Source PropTech / VentureTech CRM powered by blockchain and smart contracts

* OffsideI allows for real-estate listings directly without going through a broker or agent

* OffsideAI allows influencers to get ad campaign deals through the OffsideAI platform

* OffsideAI allows fractional investments in real-estate through the app

* OffsideAI is powered by blockchain 

## Usage

```
==> yarn rw info
(node:81402) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

  System:
    OS: macOS 12.2
    Shell: 3.2.57 - /bin/bash
  Binaries:
    Node: 16.13.2 - /private/var/folders/xy/kq0jpxdx38j_rzzry8kwp6yc0000gn/T/xfs-fa661972/node
    Yarn: 3.2.1 - /private/var/folders/xy/kq0jpxdx38j_rzzry8kwp6yc0000gn/T/xfs-fa661972/yarn
  Databases:
    SQLite: 3.36.0 - /usr/bin/sqlite3
  Browsers:
    Chrome: 103.0.5060.53
    Safari: 15.3
  npmPackages:
    @redwoodjs/core: 2.0.0 => 2.0.0 

```

## Steps

* Bootstrap
```
==> node -v
v16.13.2


==> yarn -v
1.22.11


==> yarn create redwood-app offside-ai

==> cd offside-ai

==> yarn rw dev

==> yarn rw generate page Home /

==> yarn rw generate page About

==> yarn rw generate layout offsidelayout

==> yarn rw prisma migrate dev

==> yarn rw storybook

==> yarn redwood generate page team
```

* Create model Listing
```
model Listing {
  id Int @id @default(autoincrement())
  title String 
  description String
  createdAt DateTime @default(now())
}
```
* Run scaffold for Listing

```
==> yarn rw g scaffold listing
```



```
Getting Tailwind working with Redwood

https://mdv.io/tailwindcss-in-redwoodjs
```
