package com.alibaba.weex.android.utils.concurrent;

import android.util.Log;

import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * Created by liyazhou on 2017/10/15.
 */

public class ThreadPoolFactory {
    private static volatile ScheduledThreadPoolExecutor scheduleThreadPoolExecutor;
    private static final AtomicInteger integer = new AtomicInteger();
    private static final String TAG = "ThreadPoolFactory";

    public ThreadPoolFactory() {
    }

    public static ScheduledThreadPoolExecutor getScheduledExecutor() {
        if(scheduleThreadPoolExecutor == null) {
            synchronized(ThreadPoolFactory.class) {
                if(scheduleThreadPoolExecutor == null) {
                    scheduleThreadPoolExecutor = new ScheduledThreadPoolExecutor(1, new ScheduledThreadFactory(TAG));
                    scheduleThreadPoolExecutor.setKeepAliveTime(60L, TimeUnit.SECONDS);
                    scheduleThreadPoolExecutor.allowCoreThreadTimeOut(true);
                }
            }
        }

        return scheduleThreadPoolExecutor;
    }

    public static ScheduledFuture<?> schedule(Runnable runnable, long delay, TimeUnit timeUnit) {
        ScheduledFuture future = null;

        try {
            future = getScheduledExecutor().schedule(runnable, delay, timeUnit);
        } catch (Throwable throwable) {
            Log.e(TAG, "ThreadPoolExecutorFactory schedule", throwable);
        }

        return future;
    }

    public static void execute(Runnable runnable) {
        try {
            getScheduledExecutor().execute(runnable);
        } catch (Throwable throwable) {
            Log.e(TAG, "ThreadPoolExecutorFactory execute", throwable);
        }

    }

    static class ScheduledThreadFactory implements ThreadFactory {
        private String mThreadTag;

        public ScheduledThreadFactory(String var1) {
            this.mThreadTag = var1;
        }

        public Thread newThread(Runnable runnable) {
            int threadName = ThreadPoolFactory.integer.getAndIncrement();
            Thread thread = new Thread(runnable, this.mThreadTag + threadName);
            thread.setPriority(Thread.NORM_PRIORITY);
            return thread;
        }
    }
}
