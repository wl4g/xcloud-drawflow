/*
 * Copyright (C) 2017 ~ 2025 the original author or authors.
 * <Wanglsir@gmail.com, 983708408@qq.com> Technology CO.LTD.
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 * Reference to website: http://wl4g.com
 */
package com.wl4g.drawflow.cache;

import java.util.concurrent.TimeUnit;

import com.google.common.cache.Cache;
import com.google.common.cache.CacheBuilder;

/**
 * {@link LocalDrawflowCache}
 * 
 * @author Wangl.sir &lt;wanglsir@gmail.com, 983708408@qq.com&gt;
 * @version v1.0 2021-05-11
 * @sine v1.0
 * @see
 */
public class LocalDrawflowCache implements DrawflowCache {

	protected final Cache<Object, Object> cache;

	public LocalDrawflowCache() {
		this.cache = CacheBuilder.newBuilder()
				// 设置并发级别为8，并发级别是指可以同时写缓存的线程数
				.concurrencyLevel(8)
				// 设置缓存容器的初始容量为10
				.initialCapacity(10)
				// 设置缓存最大容量为100，超过100之后就会按照LRU最近虽少使用算法来移除缓存项
				.maximumSize(100)
				// 是否需要统计缓存情况,该操作消耗一定的性能,生产环境应该去除
				.recordStats()
				// 设置写缓存后n秒钟过期
				.expireAfterWrite(60, TimeUnit.SECONDS)
				// 设置读写缓存后n秒钟过期,实际很少用到,类似于expireAfterWrite
				// .expireAfterAccess(17, TimeUnit.SECONDS)
				// 只阻塞当前数据加载线程，其他线程返回旧值
				// .refreshAfterWrite(13, TimeUnit.SECONDS)
				// 设置缓存的移除通知
				.removalListener(notification -> {
					System.out.println(
							notification.getKey() + " " + notification.getValue() + " 被移除,原因:" + notification.getCause());
				})
				// build方法中可以指定CacheLoader，在缓存不存在时通过CacheLoader的实现自动加载缓存
				.build();
	}

	@SuppressWarnings("unchecked")
	@Override
	public <T> T get(Object key, Class<T> type) {
		return (T) cache.getIfPresent(key);
	}

	@Override
	public void put(Object key, Object value) {
		cache.put(key, value);
	}

	@Override
	public void remove(Object key) {
		cache.invalidate(key);
	}

	@Override
	public void clear() {
		cache.invalidateAll();
	}

}
