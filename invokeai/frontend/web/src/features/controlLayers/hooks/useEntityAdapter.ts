import { useCanvasManager } from 'features/controlLayers/contexts/CanvasManagerProviderGate';
import type { CanvasEntityAdapterControlLayer } from 'features/controlLayers/konva/CanvasEntityAdapter/CanvasEntityAdapterControlLayer';
import type { CanvasEntityAdapterInpaintMask } from 'features/controlLayers/konva/CanvasEntityAdapter/CanvasEntityAdapterInpaintMask';
import type { CanvasEntityAdapterRasterLayer } from 'features/controlLayers/konva/CanvasEntityAdapter/CanvasEntityAdapterRasterLayer';
import type { CanvasEntityAdapterRegionalGuidance } from 'features/controlLayers/konva/CanvasEntityAdapter/CanvasEntityAdapterRegionalGuidance';
import type { CanvasEntityIdentifier } from 'features/controlLayers/store/types';
import { useMemo } from 'react';
import { assert } from 'tsafe';

export const useEntityAdapter = (
  entityIdentifier: CanvasEntityIdentifier
):
  | CanvasEntityAdapterRasterLayer
  | CanvasEntityAdapterControlLayer
  | CanvasEntityAdapterInpaintMask
  | CanvasEntityAdapterRegionalGuidance => {
  const canvasManager = useCanvasManager();

  const adapter = useMemo(() => {
    const adapter = canvasManager.getAdapter(entityIdentifier);
    assert(adapter, 'Entity adapter not found');
    return adapter;
  }, [canvasManager, entityIdentifier]);

  return adapter;
};
