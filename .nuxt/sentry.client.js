import Vue from 'vue'
import merge from '~lodash.mergewith'
import * as Sentry from '~@sentry/vue'

import { ExtraErrorData, ReportingObserver, RewriteFrames } from '~@sentry/integrations'

export default async function (ctx, inject) {
  /* eslint-disable object-curly-spacing, quote-props, quotes, key-spacing, comma-spacing */
  const config = {
    Vue,
    release:undefined,
    dsn:"https:\u002F\u002Fac3229f38bf6456e88f80dd4e00b8836@o4504495035580416.ingest.sentry.io\u002F4504495039250432",
    environment:"production",
  }

  const runtimeConfigKey = "sentry"
  if (ctx.$config && runtimeConfigKey && ctx.$config[runtimeConfigKey]) {
    merge(config, ctx.$config[runtimeConfigKey].config, ctx.$config[runtimeConfigKey].clientConfig)
  }

  config.integrations = [
    new ExtraErrorData(),
    new ReportingObserver(),
    new RewriteFrames(),
  ]

  /* eslint-enable object-curly-spacing, quote-props, quotes, key-spacing, comma-spacing */
  Sentry.init(config)

  inject('sentry', Sentry)
  ctx.$sentry = Sentry
}
