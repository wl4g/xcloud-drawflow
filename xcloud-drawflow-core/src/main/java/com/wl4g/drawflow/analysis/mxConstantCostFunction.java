/**
 * Copyright (c) 2007-2017, Gaudenz Alder
 * Copyright (c) 2007-2017, JGraph Ltd
 */
package com.wl4g.drawflow.analysis;

import com.wl4g.drawflow.view.mxCellState;

/**
 * Implements a cost function for a constant cost per traversed cell.
 */
public class mxConstantCostFunction implements mxICostFunction {

	/**
	 * 
	 */
	protected double cost = 0;

	/**
	 * 
	 * @param cost
	 *            the cost value for this function
	 */
	public mxConstantCostFunction(double cost) {
		this.cost = cost;
	}

	/**
	 *
	 */
	public double getCost(mxCellState state) {
		return cost;
	}

}
