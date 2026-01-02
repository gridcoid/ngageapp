# n·gage App

Audience and segmentation management app for targeted campaigns.

## Node Version

16

## ENV

```env
IS_DEV=false
APP_NAME='N-gage'
BASE_URL='http://localhost:8080/v1/'
```

## Installation

`yarn install`

## Development

`yarn dev`

## Generate Static Files

- Staging: `yarn generate:dev` pada branch `dev`
- Production: `yarn generate` pada branch `master`

## Deploy

- Staging: `yarn rsync:dev` pada branch `dev`
- Production: `yarn rsync` pada branch `master`
