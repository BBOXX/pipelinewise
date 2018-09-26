import React from 'react';
import { FormattedMessage } from 'react-intl';
import dateFormat from 'dateformat';

import messages from './messages';

function formatDate(ts, format="yyyy-mm-dd hh:MM:ss") {
  try {
    return dateFormat(ts, format)
  } catch(err) {}

  return "Unknown"
}

function findItemByKey(a, k, m) {
  if (a && Array.isArray(a) && m) {
    return a.find(i => i[k] == m)
  }
  return false
}

function statusToObj(status) {
  let obj;

  switch (status) {
    case 'ready': obj = {
        className: 'text-success',
        formattedMessage: <FormattedMessage {...messages.statusReady} />,
      }
      break;
    case 'started': obj = {
        className: 'text-warning',
        formattedMessage: <FormattedMessage {...messages.statusStarted} />,
      }
      break;
    case 'running': obj = {
        className: 'text-primary',
        formattedMessage: <FormattedMessage {...messages.statusRunning} />,
      }
      break;
    case 'success': obj = {
        className: 'text-success',
        formattedMessage: <FormattedMessage {...messages.statusSuccess} />,
      }
      break;
    case 'failed': obj = {
        className: 'text-danger',
        formattedMessage: <FormattedMessage {...messages.statusFailed} />,
      }
      break;
    default: obj = {
        className: 'text-secondary font-italic',
        formattedMessage: <FormattedMessage {...messages.statusUnknown} values={{ status }} />
      }
  }

  return obj
}

export {
  formatDate,
  findItemByKey,
  statusToObj,
}