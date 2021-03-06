/*
 * cloudbeaver - Cloud Database Manager
 * Copyright (C) 2020 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import { useService } from '@cloudbeaver/core-di';

import { ROOT_NODE_PATH } from './NodesManager/NavNodeInfoResource';
import { NavNodeManagerService } from './NodesManager/NavNodeManagerService';

export function useChildren(navNodeId = ROOT_NODE_PATH) {
  const navNodeManagerService = useService(NavNodeManagerService);
  const children = navNodeManagerService.getTree(navNodeId);
  const isLoading = navNodeManagerService.navTree.isDataLoading(navNodeId);
  const isLoaded = navNodeManagerService.navTree.isLoaded(navNodeId);
  const isOutdated = navNodeManagerService.navTree.isOutdated(navNodeId);

  return {
    children,
    isLoaded,
    isLoading,
    isOutdated,
  };
}
