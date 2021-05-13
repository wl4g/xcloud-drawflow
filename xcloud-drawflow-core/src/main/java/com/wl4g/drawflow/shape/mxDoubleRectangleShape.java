package com.wl4g.drawflow.shape;

import java.awt.Rectangle;

import com.wl4g.drawflow.canvas.mxGraphics2DCanvas;
import com.wl4g.drawflow.util.mxConstants;
import com.wl4g.drawflow.util.mxUtils;
import com.wl4g.drawflow.view.mxCellState;

public class mxDoubleRectangleShape extends mxRectangleShape {

	/**
	 * 
	 */
	public void paintShape(mxGraphics2DCanvas canvas, mxCellState state) {
		super.paintShape(canvas, state);

		int inset = (int) Math
				.round((mxUtils.getFloat(state.getStyle(), mxConstants.STYLE_STROKEWIDTH, 1) + 3) * canvas.getScale());

		Rectangle rect = state.getRectangle();
		int x = rect.x + inset;
		int y = rect.y + inset;
		int w = rect.width - 2 * inset;
		int h = rect.height - 2 * inset;

		canvas.getGraphics().drawRect(x, y, w, h);
	}

}
