- 性能上，`Last-Modified`优于`ETag`，`Last-Modified`记录的是时间点，而`Etag`需要根据文件的 MD5 算法生成对应的 hash 值。

- 精度上， `ETag`优于`Last-Modified`。`ETag`按照内容给资源带上标识，能准确感知资源变化，`Last-Modified` 在某些场景并不能准确感知变化:

比如:

```
1.编辑了资源文件，但是文件内容并没有更改，这样也会造成缓存失效。
2.Last-Modified 能够感知的单位时间是秒，如果文件在 1 秒内改变了多次，那么这时候的 Last-Modified 并没有体现出修改了。
```

`如果两种方式都支持的话，服务器会优先考虑ETag`
