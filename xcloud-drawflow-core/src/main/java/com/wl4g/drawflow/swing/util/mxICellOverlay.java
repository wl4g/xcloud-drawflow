package com.wl4g.drawflow.swing.util;

import com.wl4g.drawflow.util.mxRectangle;
import com.wl4g.drawflow.view.mxCellState;

public interface mxICellOverlay
{

	/**
	 * 
	 */
	mxRectangle getBounds(mxCellState state);

}
