/**
 * Copyright (c) 2010, Gaudenz Alder, David Benson
 */
package com.wl4g.drawflow.shape;

import java.awt.Color;
import java.awt.Paint;
import java.awt.Shape;
import java.util.Map;

import com.wl4g.drawflow.canvas.mxGraphics2DCanvas;
import com.wl4g.drawflow.util.mxConstants;
import com.wl4g.drawflow.util.mxRectangle;
import com.wl4g.drawflow.util.mxUtils;
import com.wl4g.drawflow.view.mxCellState;

public class mxBasicShape implements mxIShape {

	/**
	 * 
	 */
	public void paintShape(mxGraphics2DCanvas canvas, mxCellState state) {
		Shape shape = createShape(canvas, state);

		if (shape != null) {
			// Paints the background
			if (configureGraphics(canvas, state, true)) {
				canvas.fillShape(shape, hasShadow(canvas, state));
			}

			// Paints the foreground
			if (configureGraphics(canvas, state, false)) {
				canvas.getGraphics().draw(shape);
			}
		}
	}

	/**
	 * 
	 */
	public Shape createShape(mxGraphics2DCanvas canvas, mxCellState state) {
		return null;
	}

	/**
	 * Configures the graphics object ready to paint.
	 * 
	 * @param canvas
	 *            the canvas to be painted to
	 * @param state
	 *            the state of cell to be painted
	 * @param background
	 *            whether or not this is the background stage of the shape paint
	 * @return whether or not the shape is ready to be drawn
	 */
	protected boolean configureGraphics(mxGraphics2DCanvas canvas, mxCellState state, boolean background) {
		Map<String, Object> style = state.getStyle();

		if (background) {
			// Paints the background of the shape
			Paint fillPaint = hasGradient(canvas, state) ? canvas.createFillPaint(getGradientBounds(canvas, state), style) : null;

			if (fillPaint != null) {
				canvas.getGraphics().setPaint(fillPaint);

				return true;
			} else {
				Color color = getFillColor(canvas, state);
				canvas.getGraphics().setColor(color);

				return color != null;
			}
		} else {
			canvas.getGraphics().setPaint(null);
			Color color = getStrokeColor(canvas, state);
			canvas.getGraphics().setColor(color);
			canvas.getGraphics().setStroke(canvas.createStroke(style));

			return color != null;
		}
	}

	/**
	 * 
	 */
	protected mxRectangle getGradientBounds(mxGraphics2DCanvas canvas, mxCellState state) {
		return state;
	}

	/**
	 * 
	 */
	public boolean hasGradient(mxGraphics2DCanvas canvas, mxCellState state) {
		return true;
	}

	/**
	 * 
	 */
	public boolean hasShadow(mxGraphics2DCanvas canvas, mxCellState state) {
		return mxUtils.isTrue(state.getStyle(), mxConstants.STYLE_SHADOW, false);
	}

	/**
	 * 
	 */
	public Color getFillColor(mxGraphics2DCanvas canvas, mxCellState state) {
		return mxUtils.getColor(state.getStyle(), mxConstants.STYLE_FILLCOLOR);
	}

	/**
	 * 
	 */
	public Color getStrokeColor(mxGraphics2DCanvas canvas, mxCellState state) {
		return mxUtils.getColor(state.getStyle(), mxConstants.STYLE_STROKECOLOR);
	}

}
