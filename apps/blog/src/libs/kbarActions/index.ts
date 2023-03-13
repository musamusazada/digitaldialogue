import { NextRouter } from 'next/router';
import { IconActionType, socialActions } from 'core/constants';
import { openExternalLink } from 'core/utils';

import { resumeUrl } from '../../../_config';
import categoryActions from './categories';
import postActions from './posts';

function generateKbarAction(router: NextRouter) {
  const routePostActions = postActions.map(postAction => {
    if (!postAction.parent) return postAction;
    return {
      ...postAction,
      perform: () => {
        router.push(`/${postAction.id}`);
      },
    };
  });

  const routeCategoryActions = categoryActions.map(categoryAction => {
    if (!categoryAction.parent) return categoryAction;
    return {
      ...categoryAction,
      perform: () => {
        router.push(`/category/${categoryAction.id}`);
      },
    };
  });

  const rssFeedAction: IconActionType = {
    id: 'rss',
    name: 'RSS',
    section: 'Scope',
    shortcut: [],
    keywords: 'rss, feed',
    perform: () => openExternalLink(`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/rss.xml`),
  };

  const kbarActions: IconActionType[] = [...routePostActions, ...routeCategoryActions, rssFeedAction];

  return kbarActions;
}

export default generateKbarAction;
