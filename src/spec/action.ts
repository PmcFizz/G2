import { ActionComponent } from '../runtime';
import { FisheyeCoordinate } from './coordinate';

export type Action =
  | FisheyeFocusAction
  | CustomAction
  | SurfacePointSelectionAction
  | HighlightSelectionAction
  | PlotAction
  | TooltipAction;

export type ActionTypes =
  | 'fisheyeFocus'
  | 'surfacePointSelection'
  | 'highlightSelection'
  | 'plot'
  | 'tooltip'
  | CustomAction;

export type FisheyeFocusAction = {
  type?: 'fisheyeFocus';
} & Omit<FisheyeCoordinate, 'type'>;

export type SurfacePointSelectionAction = {
  type?: 'surfacePointSelection';
};

export type HighlightSelectionAction = {
  type?: 'highlightSelection';
  color?: string;
};

export type PlotAction = {
  type?: 'plot';
};

export type TooltipAction = {
  type?: 'tooltip';
};

export type CustomAction = {
  type?: ActionComponent;
  [key: string]: any;
};