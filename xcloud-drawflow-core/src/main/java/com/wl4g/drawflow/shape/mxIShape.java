package com.wl4g.drawflow.shape;

import com.wl4g.drawflow.canvas.mxGraphics2DCanvas;
import com.wl4g.drawflow.view.mxCellState;

public interface mxIShape {
	/**
	 * 
	 */
	void paintShape(mxGraphics2DCanvas canvas, mxCellState state);

}
