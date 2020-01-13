{/* <div className={goodsPSStyles.columnBox}> */}
{/*  <TreeSelect */}
{/*    {...tProps} */}
{/*    className={goodsPSStyles.treeWrapper} */}
{/*  /> */}
{/*  /!* {columnValue && columnValue.length > 0 && ( *!/*/}
{/*  /!*  <div className={goodsPSStyles.columnWrapper}> *!/*/}
{/*  /!*    <h3>星球目录预览</h3> *!/*/}
{/*  /!*    <Collapse *!/*/}
{/*  /!*      defaultActiveKey={['1']} *!/*/}
{/*  /!*      onChange={callback} *!/*/}
{/*  /!*    > *!/*/}
{/*  /!*      {columnValue.map( *!/*/}
{/*  /!*        item => *!/*/}
{/*  /!*          item.show && ( *!/*/}
{/*  /!*            <Panel header={item.title} key={item.value}> *!/*/}
{/*  /!*              {item.children && *!/*/}
{/*  /!*                item.children.length > 0 && *!/*/}
{/*  /!*                item.children.map(childrenItem => { *!/*/}
{/*  /!*                  return childrenItem.children && *!/*/}
{/*  /!*                    childrenItem.children.length > 0 *!/*/}
{/*  /!*                    ? childrenItem.show && ( *!/*/}
{/*  /!*                        <Collapse *!/*/}
{/*  /!*                          defaultActiveKey="1" *!/*/}
{/*  /!*                          key={childrenItem.key} *!/*/}
{/*  /!*                        > *!/*/}
{/*  /!*                          <Panel *!/*/}
{/*  /!*                            header={childrenItem.title} *!/*/}
{/*  /!*                            key={childrenItem.value} *!/*/}
{/*  /!*                          > *!/*/}
{/*  /!*                            {childrenItem.children.map( *!/*/}
{/*  /!*                              latestItem => *!/*/}
{/*  /!*                                latestItem.show && ( *!/*/}
{/*  /!*                                  <p *!/*/}
{/*  /!*                                    key={ *!/*/}
{/*  /!*                                      latestItem.value *!/*/}
{/*  /!*                                    } *!/*/}
{/*  /!*                                  > *!/*/}
{/*  /!*                                    {latestItem.title} *!/*/}
{/*  /!*                                  </p> *!/*/}
{/*  /!*                                ) *!/*/}
{/*  /!*                            )} *!/*/}
{/*  /!*                          </Panel> *!/*/}
{/*  /!*                        </Collapse> *!/*/}
{/*  /!*                      ) *!/*/}
{/*  /!*                    : childrenItem.show && ( *!/*/}
{/*  /!*                        <p key={childrenItem.key}> *!/*/}
{/*  /!*                          {childrenItem.title} *!/*/}
{/*  /!*                        </p> *!/*/}
{/*  /!*                      ) *!/*/}
{/*  /!*                })} *!/*/}
{/*  /!*            </Panel> *!/*/}
{/*  /!*          ) *!/*/}
{/*  /!*      )} *!/*/}
{/*  /!*    </Collapse> *!/*/}
{/*  /!*  </div> *!/*/}
{/*  /!* )} *!/*/}
{/*</div>*/}