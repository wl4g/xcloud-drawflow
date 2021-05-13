package com.wl4g.drawflow.shape;

import com.wl4g.drawflow.canvas.mxGraphics2DCanvas;
import com.wl4g.drawflow.util.mxPoint;
import com.wl4g.drawflow.view.mxCellState;

public interface mxIMarker {
	/**
	 * 
	 */
	mxPoint paintMarker(mxGraphics2DCanvas canvas, mxCellState state, String type, mxPoint pe, double nx, double ny, double size,
			boolean source);

}
