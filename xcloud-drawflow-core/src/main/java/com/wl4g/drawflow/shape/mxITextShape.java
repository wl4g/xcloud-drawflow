/**
 * Copyright (c) 2010, Gaudenz Alder, David Benson
 */
package com.wl4g.drawflow.shape;

import java.util.Map;

import com.wl4g.drawflow.canvas.mxGraphics2DCanvas;
import com.wl4g.drawflow.view.mxCellState;

public interface mxITextShape {
	/**
	 * 
	 */
	void paintShape(mxGraphics2DCanvas canvas, String text, mxCellState state, Map<String, Object> style);

}
