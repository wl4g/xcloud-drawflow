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

import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * {@link DrawflowAutoConfiguration}
 * 
 * @author Wangl.sir &lt;wanglsir@gmail.com, 983708408@qq.com&gt;
 * @version v1.0 2021-05-11
 * @sine v1.0
 * @see
 */
@Configuration
public class DrawflowAutoConfiguration {

	@Bean
	@ConditionalOnMissingBean(DrawflowCache.class)
	public DrawflowCache localDrawflowCache() {
		return new LocalDrawflowCache();
	}

	@Bean
	@ConditionalOnProperty(name = "spring.xcloud.drawflow.cache.jedis.enable", matchIfMissing = false)
	public DrawflowCache jedisDrawflowCache() {
		return new JedisDrawflowCache();
	}

}
